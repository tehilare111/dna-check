from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from datetime import datetime
from django.conf import settings

from rest_framework.views import APIView

from customers.models import LostForm
from customers.serializers import LostFormSerializer

import time
import os

@csrf_exempt
def customer_list(request):
    
    if request.method == 'GET':
        customers = LostForm.objects.all()
        form_serializer = LostFormSerializer(customers, many=True)

        return JsonResponse(form_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'POST':
        print("yesss")
        customer_data = JSONParser().parse(request)
        customer_serializer = LostFormSerializer(data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(customer_serializer.data, status=status.HTTP_201_CREATED ) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        LostForm.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt 
def customer_detail(request, pk):
    print("custumer-detail", request.method)
    try: 
        customer = LostForm.objects.get(pk=pk) 
    except LostForm.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        customer_serializer = LostFormSerializer(customer) 
        return JsonResponse(customer_serializer.data) 
 
    elif request.method == 'PUT': 
        print("reach here")
        customer_data = JSONParser().parse(request) 
        customer_serializer = LostFormSerializer(customer, data=customer_data) 
        if customer_serializer.is_valid(): 
            print("reach here2")
            customer_serializer.save() 
            return JsonResponse(customer_serializer.data) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        customer.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

    
@csrf_exempt
def customer_list_age(request, age):
    customers = LostForm.objects.filter(age=age)
        
    if request.method == 'GET': 
        customers_serializer = LostFormSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
    
@csrf_exempt
def new_event_form(request):
    
    if request.method == 'GET':
        #print(LostForm.objects.filter(reference=0))
        #return HttpResponse(status=status.HTTP_204_NO_CONTENT)
        dt = datetime.today()
        payload = {'datetime': '{}/{}/{}'.format(dt.day, dt.month, dt.year)}
        return JsonResponse(payload, safe=False)

    elif request.method == 'POST':
        # customer_data = JSONParser().parse(request)
        customer_serializer = LostFormSerializer(request.POST, request.FILES)
        if customer_serializer.is_valid():
            customer_serializer.save(reference = str(int(LostForm.objects.aggregate(Max('reference'))['reference__max']) + 1))
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)
            return JsonResponse(customer_serializer.data, status=status.HTTP_201_CREATED ) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def existing_event_form(request, reference):
    try: 
        event_form = LostForm.objects.get(reference=reference) 
    except LostForm.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET':
        customer_serializer = LostFormSerializer(event_form)
        return JsonResponse(customer_serializer.data)
 
    elif request.method == 'PUT':
        customer_data = JSONParser().parse(request)
        customer_serializer = LostFormSerializer(event_form, data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            return JsonResponse(customer_serializer.data)
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    elif request.method == 'DELETE': 
        event_form.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def customer_detail_Users(request, firstname):
    print("all fine: ", firstname)
    return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def download_file(request, path):
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    print('file_path', file_path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    return HttpResponse(status=status.HTTP_404_NOT_FOUND)


class NewEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = LostFormSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save(reference = int(LostForm.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1)
            return JsonResponse(file_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, reference,*args, **kwargs):
        try: 
            event_form = LostForm.objects.get(reference=reference) 
        except LostForm.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        file_serializer = LostFormSerializer(event_form, data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            return JsonResponse(file_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, reference, *args, **kwargs):
        try: 
            event_form = LostForm.objects.get(reference=reference) 
        except LostForm.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        customer_serializer = LostFormSerializer(event_form)
        return JsonResponse(customer_serializer.data)

    def delete(self, request, reference, *args, **kwargs):
        try: 
            event_form = LostForm.objects.get(reference=reference) 
        except LostForm.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        event_form.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from datetime import datetime

from rest_framework.views import APIView

from customers.models import LostForm
from customers.serializers import CustomerSerializer

import time

@csrf_exempt
def customer_list(request):
    print("custumer-list", request.headers["Origin"])
    if request.method == 'GET':
        customers = LostForm.objects.all()
        customers_serializer = CustomerSerializer(customers, many=True)

        return JsonResponse(customers_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'POST':
        print("yesss")
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
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
        customer_serializer = CustomerSerializer(customer) 
        return JsonResponse(customer_serializer.data) 
 
    elif request.method == 'PUT': 
        print("reach here")
        customer_data = JSONParser().parse(request) 
        customer_serializer = CustomerSerializer(customer, data=customer_data) 
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
        customers_serializer = CustomerSerializer(customers, many=True)
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
        customer_serializer = CustomerSerializer(request.POST, request.FILES)
        if customer_serializer.is_valid():
            customer_serializer.save(reference = str(int(LostForm.objects.aggregate(Max('reference'))['reference__max']) + 1))
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)
            return JsonResponse(customer_serializer.data, status=status.HTTP_201_CREATED ) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
import json
@csrf_exempt
def new_event_form_file(request):    
    print('hereeee')
    if request.method == 'POST':
        print("request POST: ", request.POST, "\n", "request FILES: ", request.FILES)
        customer_data = MultiPartParser().parse(request)
        customer_serializer = CustomerSerializer(customer_data)#, data=request.POST.dict()) # data=customer_data)
        if customer_serializer.is_valid():
            print("data:")
            customer_serializer.save(reference = str(int(LostForm.objects.aggregate(Max('reference'))['reference__max']) + 1))
        
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)

        else:
            print(customer_serializer.errors)
            return HttpResponse(status=status.HTTP_400_BAD_REQUEST)

class NewEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = CustomerSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save(reference = str(int(LostForm.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1))
            return JsonResponse(file_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
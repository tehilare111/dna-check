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

from customers.models import FormsTable
from customers.serializers import FormsSerializer

import time
import os

@csrf_exempt
def customer_list(request):
    
    if request.method == 'GET':
        forms = FormsTable.objects.all()
        form_serializer = FormsSerializer(forms, many=True)

        return JsonResponse(form_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        form_serializer = FormsSerializer(data=form_data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        return JsonResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        FormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def customer_list(request, event_type):
    
    if request.method == 'GET':
        if event_type == '':
            forms = FormsTable.objects.all()
        else:
            forms = FormsTable.objects.filter(eventType=event_type)
        
        form_serializer = FormsSerializer(forms, many=True)

        return JsonResponse(form_serializer.data, safe=False)

@csrf_exempt 
def customer_detail(request, pk):
    try: 
        form = FormsTable.objects.get(pk=pk) 
    except FormsTable.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        form_serializer = FormsSerializer(customer) 
        return JsonResponse(form_serializer.data) 
 
    elif request.method == 'PUT': 
        form_data = JSONParser().parse(request) 
        form_serializer = FormsSerializer(form, data=form_data) 
        if form_serializer.is_valid(): 
            form_serializer.save() 
            return JsonResponse(form_serializer.data) 
        return JsonResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        form.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

    
@csrf_exempt
def customer_list_age(request, age):
    forms = FormsTable.objects.filter(age=age)
        
    if request.method == 'GET': 
        forms_serializer = FormsSerializer(forms, many=True)
        return JsonResponse(forms_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
    
@csrf_exempt
def new_event_form(request):
    
    if request.method == 'GET':
        dt = datetime.today()
        payload = {'datetime': '{}/{}/{}'.format(dt.day, dt.month, dt.year)}
        return JsonResponse(payload, safe=False)

    elif request.method == 'POST':
        form_serializer = FormsSerializer(request.POST, request.FILES)
        if form_serializer.is_valid():
            form_serializer.save(reference = str(int(FormsTable.objects.aggregate(Max('reference'))['reference__max']) + 1))
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        return JsonResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def existing_event_form(request, reference):
    try: 
        event_form = FormsTable.objects.get(reference=reference) 
    except FormsTable.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET':
        form_serializer = FormsSerializer(event_form)
        return JsonResponse(form_serializer.data)
 
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        form_serializer = FormsSerializer(event_form, data=form_data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse(form_serializer.data)
        return JsonResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    elif request.method == 'DELETE': 
        event_form.delete() 
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
        form_serializer = FormsSerializer(data=request.data)
        if form_serializer.is_valid():
            form_serializer.save(reference = int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1)
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, reference,*args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference) 
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        form_serializer = FormsSerializer(event_form, data=request.data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference) 
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        form_serializer = FormsSerializer(event_form)
        return JsonResponse(form_serializer.data)

    def delete(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
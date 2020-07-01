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

from forms.models import FormsTable
from forms.serializers import FormsSerializer
from users import utils
import time
import os
import csv


PERMISSIONS_PAGE_FROM_MANAGER="מנהלן מערכת"
PERMISSIONS_PAGE_FROM_EDIT_EVENTS="מדווח אירועים"
PERMISSIONS_PAGE_FROM_WATCHING_EVENTS="צופה אירועים"
PERMISSIONS_ARRAY=[]



def check_permissions(request,permissions_array):
    token=request.headers['Authorization']
    token=token.split(" ")
    token=token[1]
    permission=utils.check_token_not_login(token)
    if permission in permissions_array:
        print("wowowow")
        return True
    else:
        return False

@csrf_exempt
def forms_list(request, event_type):
    '''
        Responsible to hendle requests froms main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    if not utils.check_permissions(request,[PERMISSIONS_PAGE_FROM_MANAGER,PERMISSIONS_PAGE_FROM_EDIT_EVENTS,PERMISSIONS_PAGE_FROM_WATCHING_EVENTS]):
        return HttpResponse(status=status.HTTP_401_FORBIDDEN)
    if request.method == 'GET':
            if event_type == '':
                forms = FormsTable.objects.all()
            else:
                forms = FormsTable.objects.filter(eventType=event_type)
            
            form_serializer = FormsSerializer(forms, many=True)

            return JsonResponse(form_serializer.data, safe=False) 
    
    elif request.method == 'DELETE':
        FormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)




@csrf_exempt
def new_event_form(request):
    '''
        New Event Form load all its initial values from here.
        Relevant url: /api/event_forms/
    '''
    if not utils.check_permissions(request,[PERMISSIONS_PAGE_FROM_MANAGER,PERMISSIONS_PAGE_FROM_EDIT_EVENTS,PERMISSIONS_PAGE_FROM_WATCHING_EVENTS]):
        return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
        dt = datetime.today()
        payload = {'datetime': '{}/{}/{}'.format(dt.day, dt.month, dt.year)}
        return JsonResponse(payload, safe=False)
            
'''
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
'''

@csrf_exempt
def download_file(request, path):
    '''
        Download file from given path in the request url.
    '''
    if not utils.check_permissions(request,PERMISSIONS_PAGE_FROM_MANAGER):
        return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    


@csrf_exempt
def download_xl_file(request, event_type):
    '''
        Export xl file following the given url
    '''
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachement;filename=\"report.csv\"'

    response.write(u'\ufeff'.encode('utf8'))
    writer = csv.writer(response)
    writer.writerow(['reference', 'eventType', 'date', 'reporterName', 'reporterUnit', 'caseIdOnMetzah', 'handlingResults', 'eventStatus', 'handlingStatus', 'equipment', 'equipmentType' ,'equipmentMark', 'equipmentMakat', 'signerUnit', 'signerName', 'signerId', 'rank', 'position', 'eventDate', 'eventHour', 'reviewReference','isMatchToReport'])

    if event_type == '':
        forms = FormsTable.objects.all()
    else:
        forms = FormsTable.objects.filter(eventType=event_type)

    for form in forms.values_list('reference', 'eventType', 'date', 'reporterName', 'reporterUnit', 'caseIdOnMetzah', 'handlingResults', 'eventStatus', 'handlingStatus', 'equipment', 'equipmentType' ,'equipmentMark', 'equipmentMakat', 'signerUnit', 'signerName', 'signerId', 'rank', 'position', 'eventDate', 'eventHour', 'reviewReference','isMatchToReport'):
        writer.writerow(form)

    return response



class NewEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        form_serializer = FormsSerializer(data=request.data)
        if form_serializer.is_valid():
            form_serializer.save(reference = int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1)
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)

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


from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from django.conf import settings
from rest_framework.renderers import JSONRenderer
from rest_framework.views import APIView

from draft_forms.models import DraftFormsTable
from forms.models import FormsTable
from management.utils import get_inferior_units
from msgs.utils import new_event_msgs, delete_event_messages


from forms.serializers import FormsSerializer,EquipmentSerializer
from users.utils import check_permissions,check_permissions, check_permissions_dec , MANAGER, EVENTS_REPORTER, EVENTS_VIEWER

import time
import os
import csv
from datetime import datetime
import json



@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], RETURN_UNIT=True)
def forms_list(request, event_type, unit):
    '''
        Responsible to hendle requests from main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    if request.method == 'GET':
        if event_type == '':
            forms = FormsTable.objects.filter(reporterUnit__in=get_inferior_units(unit))
        else:
            forms = FormsTable.objects.filter(eventType=event_type, reporterUnit__in=get_inferior_units(unit))
        
        form_serializer = FormsSerializer(forms, many=True)

        return JsonResponse(form_serializer.data, safe=False) 

    
    elif request.method == 'DELETE':
        FormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER])
def new_event_form(request):
    '''
        New Event Form load all its initial values from here.
        Relevant url: /api/event_forms/
    '''
    if request.method == 'GET':
        dt = datetime.today()
        payload = {'datetime': '{}/{}/{}'.format(dt.day, dt.month, dt.year)}
        return JsonResponse(payload, safe=False)
            
@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER])
def download_file(request, path):
    '''
        Download file from given path in the request url.
    '''
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    
@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER])
def download_xl_file(request, event_type):
    '''
        Export xl file following the given url
    '''
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachement;filename=\"report.csv\"'

    response.write(u'\ufeff'.encode('utf8'))
    writer = csv.writer(response)
    writer.writerow(['reference', 'eventType', 'date', 'reporterName', 'reporterUnit', 'caseIdOnMetzah', 'handlingResults', 'eventStatus', 'handlingStatus', 'signerUnit', 'signerName', 'signerId', 'rank', 'position', 'eventDate', 'eventHour', 'reviewReference','isMatchToReport'])

    if event_type == '':
        forms = FormsTable.objects.all()
    else:
        forms = FormsTable.objects.filter(eventType=event_type)

    for form in forms.values_list('reference', 'eventType', 'date', 'reporterName', 'reporterUnit', 'caseIdOnMetzah', 'handlingResults', 'eventStatus', 'handlingStatus',  'signerUnit', 'signerName', 'signerId', 'rank', 'position', 'eventDate', 'eventHour', 'reviewReference','isMatchToReport'):
        writer.writerow(form)

    return response

def generate_reference(reference):
    if len(reference) > 0:
        return reference
    return max(

            int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0),
            int(DraftFormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0)
        ) + 1
        int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0)
        ) + 1

class OfficialEventFrom(APIView):


    parser_classes = (MultiPartParser, FormParser)
    
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER], API_VIEW=True)
        # if not check_permissions(request,[PERMISSIONS_PAGE_FROM_MANAGER,PERMISSIONS_PAGE_FROM_EDIT_EVENTS]):
        #     return HttpResponse(status=status.HTTP_401_FORBIDDEN)
        # form_serializer = FormsSerializer(data=request.body)
        # if form_serializer.is_valid():
        #     reference = generate_reference(reference)
        #     # Create instance for this event form in the messages database
        #     new_event_msgs(reference)
        #     form_serializer.save(reference=reference, writtenInFormals=True)
        #     return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 

    def post(self,request,reference, *args, **kwargs):

        form_serializer = FormsSerializer(data=request.body)
        data=request.data
        form=FormsSerializer(data=data)
        if (form.is_valid()):
            reference =int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0)+1
            # Create instance for this event form in the messages database
            new_event_msgs(reference)
            f=form.saveAll(request,reference)
            return JsonResponse(form.data, status=status.HTTP_201_CREATED)
        else:
            print(form.errors)
            return HttpResponse(form.errors,status=status.HTTP_400_BAD_REQUEST)
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
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], API_VIEW=True)
    def get(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        form_serializer = FormsSerializer(event_form)
        return JsonResponse(form_serializer.data)

    @check_permissions_dec([MANAGER], API_VIEW=True)
    def delete(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        # Delete this event form instance from the messages database
        delete_event_messages(reference)
        event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
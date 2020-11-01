from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from django.conf import settings

from rest_framework.views import APIView

from draft_forms.models import DraftFormsTable
from forms.models import FormsTable
from forms.serializers import FormsSerializer
from users.utils import check_permissions, check_permissions_dec , MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, REPORTER_MANAGER, EVENT_AUTHORIZER
from management.utils import get_inferior_units
from msgs.utils import new_event_msgs, delete_event_messages

import time
import os
import csv
from datetime import datetime

from itertools import chain

@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, REPORTER_MANAGER, EVENT_AUTHORIZER], RETURN_UNIT=True, RETURN_PERSONAL=True)
def forms_list(request, event_type, unit, personal_number):
    '''
        Responsible to hendle requests from main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    if request.method == 'GET':
        if event_type == '':
            unitForms = FormsTable.objects.filter(reporterUnit__in=get_inferior_units(unit))
            forms = chain(unitForms, getForms(FormsTable, unit, personal_number))
        else:
            unitForms = FormsTable.objects.filter(eventType=event_type, reporterUnit__in=get_inferior_units(unit))
            forms = chain(unitForms, getForms(FormsTable, unit, personal_number))
        
        form_serializer = FormsSerializer(forms, many=True)

        return JsonResponse(form_serializer.data, safe=False) 
    
    elif request.method == 'DELETE':
        FormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

def getForms(FormsTable, unit, personal_number):
    unitForms = FormsTable.objects.filter(reporterUnit__in=get_inferior_units(unit))
    authorizedForms = []  # Get all the forms that shared with the user.
    for form in FormsTable.objects.filter():
        if personal_number in form.eventAuthorizers and not FormsTable.objects.filter(reporterUnit__in=get_inferior_units(unit), id=form.id).exists():
            authorizedForms.append(form)
    return authorizedForms

@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, REPORTER_MANAGER, EVENT_AUTHORIZER]) # maybe EVENT_AUTHORIZER needs to be removed
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
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, REPORTER_MANAGER, EVENT_AUTHORIZER])
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
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, REPORTER_MANAGER, EVENT_AUTHORIZER])
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

def generate_reference(reference):
    if len(reference) > 0:
        return reference
    return max(
            int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0),
            int(DraftFormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0)
        ) + 1

class OfficialEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER, REPORTER_MANAGER], API_VIEW=True)
    def post(self, request, reference, *args, **kwargs):
        form_serializer = FormsSerializer(data=request.data)

        if form_serializer.is_valid():
            reference = generate_reference(reference)
            # Create instance for this event form in the messages database
            new_event_msgs(reference)
            form_serializer.save(reference=reference, writtenInFormals=True)
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER, REPORTER_MANAGER], API_VIEW=True)
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
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, REPORTER_MANAGER, EVENT_AUTHORIZER], API_VIEW=True)
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
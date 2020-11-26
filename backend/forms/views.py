from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from django.conf import settings
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView

from draft_forms.models import DraftFormsTable
from forms.models import FormsTable,EventsEquipments
from forms.serializers import FormsSerializer,EquipmentSerializer
from users.utils import check_permissions, check_permissions_dec , MANAGER, EVENTS_REPORTER, EVENTS_VIEWER
from management.utils import get_inferior_units
from msgs.utils import new_event_msgs, delete_event_messages, update_user_event_deleted

import time
import os
import csv
from datetime import datetime

@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], RETURN_USER=True)
def forms_list(request, event_type, user):
    '''
        Responsible to hendle requests from main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    if request.method == 'GET':
        if event_type == '':
            forms = FormsTable.objects.filter(reporterUnit__in=get_inferior_units(user.unit))
        else:
            forms = FormsTable.objects.filter(eventType=event_type, reporterUnit__in=get_inferior_units(user.unit))
        
        form_serializer = FormsSerializer(forms, many=True)
        is_exist=False
        for form in form_serializer.data:
            is_exist = False
            for key,value in user.unreadedMessages.items():
                if(form["reference"]==int(key)):
                    is_exist=True
                    form.update({"unreadeMessages":str(value)+";"+key})
                elif not is_exist:
                    form.update({"unreadeMessages":"undefined"+";"+str(form["reference"])})
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
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER], API_VIEW=True)
    def post(self, request, reference, *args, **kwargs):
        form_serializer = FormsSerializer(data=request.data)
        if form_serializer.is_valid():
            reference = generate_reference(reference)
            # Cyreate instance for this eveynt form in the messages database
            new_event_msgs(reference, form_serializer.validated_data['reporterUnit'])
            f=form_serializer.saveAll(request,reference)
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
            
        
    @check_permissions_dec([MANAGER, EVENTS_REPORTER], API_VIEW=True)
    def put(self, request, reference,*args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
            event_form_equipments=EventsEquipments.objects.filter(reference1=reference)
        except FormsTable.DoesNotExist and EventsEquipments.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)
        form_serializer = FormsSerializer(event_form, data=request.data)
        if("equipmentsArray" not in request.data):
            if form_serializer.is_valid():
                form_serializer.save()
                return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED )
        if("equipmentsArray" in request.data):
            event_form_equipments.delete()
            equipments_Serilazer = EquipmentSerializer(data=request.data)
            if equipments_Serilazer.is_valid():
                f=equipments_Serilazer.put_equipment(request,reference)
                # print("hahahaha",f)
                return JsonResponse({"reference":reference}, status=status.HTTP_200_OK)
            else:
                print("error",equipments_Serilazer.errors)
                return HttpResponse(equipments_Serilazer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("errorsss",form_serializer.errors)
            return HttpResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    @check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], API_VIEW=True)
    def get(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
            print("e",event_form)
            event_form_equipments=EventsEquipments.objects.filter(reference1=reference)
            print("equip",event_form_equipments)
        except FormsTable.DoesNotExist and EventsEquipments.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        form_serializer = FormsSerializer(event_form)
        equipments_serializer=EquipmentSerializer(event_form_equipments,many=True)
        return JsonResponse({"form_event":form_serializer.data,"event_form_equipments":equipments_serializer.data})

    @check_permissions_dec([MANAGER], API_VIEW=True, RETURN_USER=True)
    def delete(self, request, reference, user, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        # Delete this event form instance from the messages database
        delete_event_messages(reference)
        # Delete this event messages from all relevant users
        update_user_event_deleted(reference, user.unit)
        event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
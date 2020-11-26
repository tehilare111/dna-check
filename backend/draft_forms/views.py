from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from django.conf import settings

from rest_framework.views import APIView

from forms.views import generate_reference
from draft_forms.models import DraftFormsTable,DraftEventsEquipments
from draft_forms.serializers import DraftFormsSerializer,DraftEquipmentSerializer
from users.utils import check_permissions, check_permissions_dec , MANAGER, EVENTS_REPORTER, EVENTS_VIEWER
from management.utils import get_inferior_units
from msgs.utils import new_event_msgs, delete_event_messages, update_user_event_deleted

import time
import os
import csv
from datetime import datetime

@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], RETURN_USER=True)
def draft_forms_list(request, event_type, user):
    '''
        Responsible to hendle requests from main control table page.
        Relevant urls: /api/draft-forms/*
        GET - Return all draft forms.
        DELETE - Delete all table content. 
    '''
    if request.method == 'GET':
        forms = DraftFormsTable.objects.filter(reporterUnit__in=[user.unit])
        draft_form_serializer = DraftFormsSerializer(forms, many=True)

        return JsonResponse(draft_form_serializer.data, safe=False) 
    
    elif request.method == 'DELETE':
        DraftFormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

# Create your views here.
class DraftEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER], API_VIEW=True)
    def post(self, request, reference, *args, **kwargs):
        draft_form_serializer = DraftFormsSerializer(data=request.data)

        if draft_form_serializer.is_valid():
            reference = generate_reference(reference)
            # Create instance for this event form in the messages database
            new_event_msgs(reference, draft_form_serializer.validated_data['reporterUnit'])
            d=draft_form_serializer.saveAll(request,reference)
            return JsonResponse(draft_form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER], API_VIEW=True)
    def put(self, request, reference,*args, **kwargs):
        try: 
            draft_event_form = DraftFormsTable.objects.get(reference=reference) 
            draft_event_form_equipments=DraftEventsEquipments.objects.filter(reference1_id=reference)
            draft_event_form_equipments.delete()
        except DraftFormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        draft_form_serializer = DraftFormsSerializer(draft_event_form, data=request.data)
        if draft_form_serializer.is_valid():
            if("equipmentsArray" not in request.data):
                draft_form_serializer.save()
                return JsonResponse(draft_form_serializer.data, status=status.HTTP_201_CREATED ) 
            draft_form_serializer.saveAll(request,reference)
            return JsonResponse({"reference":reference}, status=status.HTTP_200_OK)
        else:
            return HttpResponse(draft_form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
    
    @check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], API_VIEW=True)
    def get(self, request, reference, *args, **kwargs):
        try: 
            draft_event_form = DraftFormsTable.objects.get(reference=reference)
            event_form_equipments=DraftEventsEquipments.objects.filter(reference1=reference)
        except DraftFormsTable.DoesNotExist and DraftEventsEquipments.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        draft_form_serializer = DraftFormsSerializer(draft_event_form)
        equipments_serializer=DraftEquipmentSerializer(event_form_equipments,many=True)
        return JsonResponse({"form_event":draft_form_serializer.data,"event_form_equipments":equipments_serializer.data})

    @check_permissions_dec([MANAGER, EVENTS_REPORTER], API_VIEW=True, RETURN_USER=True)
    def delete(self, request, reference, user, *args, **kwargs):
        try: 
            draft_event_form = DraftFormsTable.objects.get(reference=reference)
        except DraftFormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
        
        # Delete this event form instance from the messages database
        delete_event_messages(reference)
        # Delete this event messages from all relevant users
        update_user_event_deleted(reference, user.unit)
        draft_event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

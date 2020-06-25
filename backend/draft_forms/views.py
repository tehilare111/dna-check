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

from draft_forms.models import DraftFormsTable
from draft_forms.serializers import DraftFormsSerializer
from forms.models import FormsTable

import time
import os
import csv

@csrf_exempt
def forms_list(request):
    '''
        Responsible to hendle requests froms main control table page.
        Relevant urls: /api/draft_forms/
        GET - Return all rows from draft forms table
        DELETE - Delete all table content. 
    '''
    
    if request.method == 'GET':
        draft_forms = DraftFormsTable.objects.all()
        draft_forms_serializer = DraftFormsSerializer(draft_forms, many=True)

        return JsonResponse(draft_forms_serializer.data, safe=False)
    
    elif request.method == 'DELETE':
        DraftFormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)



class NewEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        draft_form_serializer = DraftFormsSerializer(data=request.data)
        if draft_form_serializer.is_valid():
            max_reference = max(int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0), int(DraftFormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0))
            draft_form_serializer.save(reference = max_reference + 1)
            return JsonResponse(draft_form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(draft_form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, reference,*args, **kwargs):
        try: 
            draft_event_form = DraftFormsTable.objects.get(reference=reference) 
            draft_form_serializer = DraftFormsSerializer(draft_event_form, data=request.data)
        except DraftFormsTable.DoesNotExist:
            if FormsTable.objects.filter(reference=reference).exists():
                draft_form_serializer = DraftFormsSerializer(data=request.data)
        
        if draft_form_serializer.is_valid():
            draft_form_serializer.save()
            return JsonResponse(draft_form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(draft_form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, reference, *args, **kwargs):
        try: 
            draft_event_form = DraftFormsTable.objects.get(reference=reference) 
        except DraftFormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        draft_form_serializer = DraftFormsSerializer(draft_event_form)
        return JsonResponse(draft_form_serializer.data)

    def delete(self, request, reference, *args, **kwargs):
        try: 
            draft_event_form = DraftFormsTable.objects.get(reference=reference)
        except DraftFormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        draft_event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


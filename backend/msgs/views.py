from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status

from users.utils import check_permissions_dec , MANAGER, EVENTS_REPORTER, EVENTS_VIEWER
from msgs.serializers import MsgsSerializer
from msgs.models import Msgs
from msgs.utils import update_messages_for_relevant_users

@csrf_exempt
@check_permissions_dec([MANAGER, EVENTS_REPORTER, EVENTS_VIEWER], RETURN_UNIT=True)
def msgs(request, reference, unit):
    try: 
        event_form_msgs = Msgs.objects.get(reference=reference) 
    except Msgs.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

    if request.method == 'GET':
        event_form_msgs_serializer = MsgsSerializer(event_form_msgs)
        return JsonResponse(event_form_msgs_serializer.data)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        event_form_msgs_serializer = MsgsSerializer(event_form_msgs, data=data)
        
        if event_form_msgs_serializer.is_valid():
            event_form_msgs_serializer.save()
            update_messages_for_relevant_users(unit, event_form_msgs_serializer.data['reporterUnit'])
            return JsonResponse(event_form_msgs_serializer.data) 
        else:
            return HttpResponse(event_form_msgs_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.conf import settings
from management import views


from management.models import UnitsTree, ConstantsFields
from management.serializers import UnitsTreeSerializer, ConstantsFieldsSerializer


@csrf_exempt 
def constants_fields_rank(array):
    required={} 
    print("shalom")
    try: 
        constants_fields = ConstantsFields.objects.get(constantFieldId=views.CONSTATNS_FIELDS_OBJECT_STATIC_ID) 
    except ConstantsFields.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
        
    for objects in array:
        print(objects)
        required[objects]=constants_fields[objects]
        
    return required
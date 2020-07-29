
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.conf import settings


from management.models import UnitsTree, ConstantsFields
from management.serializers import UnitsTreeSerializer, ConstantsFieldsSerializer


@csrf_exempt 
def constants_fields_array(array):
    print("array",len(array))
    required=[]
    try: 
        constants_fields = ConstantsFields.objects.get(constantFieldId=views.CONSTATNS_FIELDS_OBJECT_STATIC_ID)
        
        constants_fields_serilazers = ConstantsFieldsSerializer( constants_fields)
       
    except ConstantsFields.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND
        )
    if len(array)>1:
        return constants_fields_serilazers.data
    else:
        return constants_fields_serilazers.data[array]
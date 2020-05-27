from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.conf import settings

from management.models import UnitsTree, ConstantsFields
from management.serializers import UnitsTreeSerializer, ConstantsFieldsSerializer

# static value only for represting it and pull it from db
UNITS_TREE_OBJECT_STATIC_ID = '111999'
CONSTATNS_FIELDS_OBJECT_STATIC_ID = '28032018'

# Create your views here.
@csrf_exempt 
def units_tree_management(request):
    if request.method == 'GET': 
        try: 
            units_tree = UnitsTree.objects.get(unitTreeId=UNITS_TREE_OBJECT_STATIC_ID) 
        except UnitsTree.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
        
        units_tree_serializer = UnitsTreeSerializer(units_tree)
        return JsonResponse(units_tree_serializer.data, safe=False) 

    elif request.method == 'POST':
        try: 
            units_tree = UnitsTree.objects.get(unitTreeId=UNITS_TREE_OBJECT_STATIC_ID) 
        except UnitsTree.DoesNotExist: 
            units_tree = None
        
        data = JSONParser().parse(request) 
        if units_tree:
            units_tree_serializer = UnitsTreeSerializer(units_tree, data=data) 
        else:
            units_tree_serializer = UnitsTreeSerializer(data=data) 
        
        if units_tree_serializer.is_valid(): 
            units_tree_serializer.save(unitTreeId=UNITS_TREE_OBJECT_STATIC_ID) 
            return JsonResponse(units_tree_serializer.data) 
        return JsonResponse(units_tree_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE':
        UnitsTree.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt 
def constants_fields(request):
    if request.method == 'GET': 
        try: 
            constants_fields = ConstantsFields.objects.get(constantFieldId=CONSTATNS_FIELDS_OBJECT_STATIC_ID) 
        except ConstantsFields.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
        
        constants_fields_serializer = ConstantsFieldsSerializer(constants_fields)
        return JsonResponse(constants_fields_serializer.data, safe=False) 

    elif request.method == 'POST':
        
        try: 
            constants_fields = ConstantsFields.objects.get(constantFieldId=CONSTATNS_FIELDS_OBJECT_STATIC_ID) 
        except ConstantsFields.DoesNotExist: 
            constants_fields = None
        
        data = JSONParser().parse(request) 
        
        if constants_fields:
            constants_fields_serializer = ConstantsFieldsSerializer(constants_fields, data=data) 
        else:
            constants_fields_serializer = ConstantsFieldsSerializer(data=data) 
        
        if constants_fields_serializer.is_valid(): 
            constants_fields_serializer.save(constantFieldId=CONSTATNS_FIELDS_OBJECT_STATIC_ID) 
            return JsonResponse(constants_fields_serializer.data) 
        return JsonResponse(constants_fields_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE':
        ConstantsFields.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
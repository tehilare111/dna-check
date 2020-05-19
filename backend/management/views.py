from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.conf import settings

from management.models import UnitsTree
from management.serializers import UnitsTreeSerializer

# static value only for represting it and pull it from db
UNITS_TREE_STATIC_ID = '111999'

# Create your views here.
@csrf_exempt 
def units_tree_management(request):
    if request.method == 'GET': 
        try: 
            units_tree = UnitsTree.objects.get(unitTreeId=UNITS_TREE_STATIC_ID) 
        except UnitsTree.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
        
        units_tree_serializer = UnitsTreeSerializer(units_tree)
        return JsonResponse(units_tree_serializer.data, safe=False) 

    elif request.method == 'POST':
        try: 
            units_tree = UnitsTree.objects.get(unitTreeId=UNITS_TREE_STATIC_ID) 
        except UnitsTree.DoesNotExist: 
            units_tree = None
        
        data = JSONParser().parse(request) 
        if units_tree:
            units_tree_serializer = UnitsTreeSerializer(units_tree, data=data) 
        else:
            units_tree_serializer = UnitsTreeSerializer(data=data) 
        
        if units_tree_serializer.is_valid(): 
            units_tree_serializer.save(unitTreeId=UNITS_TREE_STATIC_ID) 
            return JsonResponse(units_tree_serializer.data) 
        return JsonResponse(units_tree_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE':
        UnitsTree.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
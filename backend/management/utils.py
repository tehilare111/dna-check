
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.conf import settings

from management.models import UnitsTree, ConstantsFields
from management.serializers import UnitsTreeSerializer, ConstantsFieldsSerializer

import re

# static value only for represting it and pull it from db
UNITS_TREE_OBJECT_STATIC_ID = '111999'
CONSTATNS_FIELDS_OBJECT_STATIC_ID = '28032018'


def constants_fields_array():
    # If no Constatnts fields Object Initiated in the database, this function will raise an exeption
    return ConstantsFieldsSerializer(ConstantsFields.objects.get(constantFieldId=CONSTATNS_FIELDS_OBJECT_STATIC_ID)).data

def units_array():
    # If no Units Tree Object Initiated in the database, this function will raise an exeption
    units_tree = UnitsTreeSerializer(UnitsTree.objects.get(unitTreeId=UNITS_TREE_OBJECT_STATIC_ID)).data
    return re.findall(r"'name': '([\w\"\' ]+)'", str(units_tree))

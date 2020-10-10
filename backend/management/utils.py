
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


def get_inferior_units(unit):
    # Return an array of all units inferior to the given units

    # Get units tree from DB
    units_tree = UnitsTreeSerializer(UnitsTree.objects.get(unitTreeId=UNITS_TREE_OBJECT_STATIC_ID)).data

    # Get the sub tree inferior to the given unit
    # Extract all units by using regex
    return re.findall(r"'name': '([\w\"\' ]+)'", find_unit_node(units_tree['treeNode'][0], unit))

def find_unit_node(node, name):
    # Recursive function that returns all the units below specific units
    if node['name'] == name:
        return str(node)
    
    if len(node['children']) < 1:
        return ''

    stringed_result = ''

    for child in node['children']:
        stringed_result += find_unit_node(child, name)
    
    return stringed_result

def get_sub_tree(units_tree, unit):
    if(units_tree["name"] == unit):
        return units_tree
    for unit_tree in units_tree['children']:
        found = get_sub_tree(unit_tree, unit)
        if found:
            return found
    return None

def replace_unit_on_tree(tree, unit, new_unit_tree):
    if(tree["name"] == unit):
        return new_unit_tree
    for sub_unit, index in enumerate(tree["children"]):
        tree["children"][index] = replace_unit_on_tree(sub_unit, unit, new_unit_tree)
    return tree

def get_superior_units(unit):
    '''
        Return all the superior units of the given unit, following the units tree 
    '''
    # Get units tree from DB
    units_tree = UnitsTreeSerializer(UnitsTree.objects.get(unitTreeId=UNITS_TREE_OBJECT_STATIC_ID)).data

    return find_superior_units(units_tree['treeNode'][0], unit, [])


def find_superior_units(node, name, units):
    '''
        Find the path to a given unit, and return it as a list
    '''
    units.append(node['name'])
    
    # When unit node found
    if node['name'] == name:
        return units

    # When reach leaf of the tree
    if len(node['children']) < 1:
        return []

    for child in node['children']:
        some_path = find_superior_units(child, name, units)
        if name in some_path:
            return some_path
    
    # In case the unit is not under this node
    return []
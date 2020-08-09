from django.shortcuts import render
from users.models import  Destination
from users.serializers import DestinationSerilazers
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from management.utils import constants_fields_array
from management.models import UnitsTree, ConstantsFields
from users.utils import check_permissions, PERMISSIONS_PAGE_FROM_MANAGER, PERMISSIONS_PAGE_FROM_EDIT_EVENTS, PERMISSIONS_PAGE_FROM_WATCHING_EVENTS,check_token,create_jwt


###############################################################
#                      Create new user                        #
###############################################################
@csrf_exempt 
def create_user(request):
    user_data = JSONParser().parse(request)
    user_serializer = DestinationSerilazers(data=user_data)
    #user_per=User.objects.create_user(user_serializer)
    if request.method == 'POST':
        if(user_serializer.is_valid()):
            if(check_user_and_personalnumbner(user_data)):
                return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)  
            else:
                user_serializer.save()
                #user_per.save()
                return HttpResponse(status=status.HTTP_204_NO_CONTENT) 
###############################################################
#                         Login page                          #
###############################################################
@csrf_exempt 
def check_login(request):
    user_data = JSONParser().parse(request)
    users_serializer = DestinationSerilazers(data=user_data)
    if request.method == 'POST':
        try:
            users = Destination.objects.get(username=user_data["username"])
            if check_user_password(users.username,user_data["password"]):
                user_form=DestinationSerilazers(users)
                return JsonResponse({"access_token":create_jwt(user_data),"permissions":user_form.data["permissions"]}, safe=False)
            else:
                return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        except Destination.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)  
################################################################
#                     Check propriety user                     #
################################################################
################## Check password ##############################
def check_user_password(username,password):
    return Destination.objects.filter(username=username,password=password).exists()
################### Check personal number ######################
def check_user_and_personalnumbner(user_data):
    return (Destination.objects.filter(username=user_data["username"]).exists() or Destination.objects.filter(personalnumber=user_data["personalnumber"]).exists())
###############################################################
#                    Get groups permissions                   #
###############################################################
@csrf_exempt 
def groups_permissions_list(request, unit,token):
    if not check_permissions(request,[PERMISSIONS_PAGE_FROM_MANAGER]):
        return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
            users = Destination.objects.filter(armyunit=unit)
            customer_u=DestinationSerilazers(users,many=True)
            return JsonResponse(customer_u.data, safe=False)     
    elif request.method == 'DELETE':
        Destination.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
###############################################################
#                         Update user                         #
###############################################################
@csrf_exempt 
def update_permissions_users(request,personalnumber):
    
    if not check_permissions(request,[PERMISSIONS_PAGE_FROM_MANAGER]):
        return HttpResponse(status=status.HTTP_401_UNAUTHORIZED) 
    try: 
        event_form = Destination.objects.get(personalnumber=personalnumber)
    except Destination.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    if request.method=='GET':
            customer_serializer = DestinationSerilazers(event_form)
            return JsonResponse(customer_serializer.data)
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        form_serializer = DestinationSerilazers(event_form, data=form_data["permissions"])
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse({"data":form_serializer.data},status=status.HTTP_204_NO_CONTENT)
          
#################################################################
#                Constanas fiald not permissions                #
#################################################################
@csrf_exempt
def get_constans_fiald(requerst,fields_array):
    data=constants_fields_array(fields_array)
    return JsonResponse({"data":data})

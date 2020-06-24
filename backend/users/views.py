from django.shortcuts import render
from users.models import  Destination
from users.serializers import DestinationSerilazers
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from management.utils import constants_fields_rank
from management.models import UnitsTree, ConstantsFields
from users import utils 
from django.contrib.auth.decorators import permission_required
PERMISSIONS_PAGE_LOGIN="מנהלן מערכת"


# Create your views here.
# Create your views here.
###############################################################
#                      יצירת משתמש חדש                       #
###############################################################

def check_permissions(request):
    token=request.headers['Authorization']
    token=token.split(" ")
    token=token[1]
    permissions=utils.check_token_not_login(token)
    if permissions==PERMISSIONS_PAGE_LOGIN:
        return True
    else:
        return False



@csrf_exempt 
def create_user(request):
  
    user_data = JSONParser().parse(request)
    print(user_data)
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
#                      התחברות לאתר                          #
###############################################################

@csrf_exempt 
def check_login(request):
    token=check_permissions(request)
    print (token)
    user_data = JSONParser().parse(request)
    users_serializer = DestinationSerilazers(data=user_data)
    print(users_serializer) 
    if request.method == 'POST':
        try:
            users = Destination.objects.get(username=user_data["username"])
            if check_user_password(users.username,user_data["password"]):
                return JsonResponse({"access_token":utils.create_jwt(user_data)}, safe=False)
            else:
                return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        except Destination.DoesNotExist: 
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)  
    
    
     

################################################################
#                  בדיקת תקינות שם משתמש                     #
################################################################   


def check_user_password(username,password):
    return Destination.objects.filter(username=username,password=password).exists()
    

def check_user_and_personalnumbner(user_data):
    return (Destination.objects.filter(username=user_data["username"]).exists() or Destination.objects.filter(personalnumber=user_data["personalnumber"]).exists())
###############################################################
#                     קבלת קבוצת הרשאות                      #
###############################################################
@csrf_exempt 
def groups_permissions_list(request, unit,token):
    '''
        Responsible to hendle requests froms main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    
    print("u",unit)
    if request.method == 'GET':
        print(token)
        if utils.check_token_not_login(token) is not False:
            users = Destination.objects.filter(armyunit=unit)
            customer_u=DestinationSerilazers(users,many=True)
            print(customer_u.data)
            return JsonResponse(customer_u.data, safe=False)
        else:
             return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
    
    elif request.method == 'DELETE':
        Destination.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

###############################################################
#                      עדכון משתמש                           #
###############################################################
@csrf_exempt 
def update_permissions_users(request,personalnumber):
    token=get_token(request)
    try: 
        event_form = Destination.objects.get(personalnumber=personalnumber)
    except Destination.DoesNotExist:
        return HttpResponse(status=status.HTTP_401_UNAUTHORIZED) 
    if request.method=='GET':
            customer_serializer = DestinationSerilazers(event_form)
            return JsonResponse(customer_serializer.data)
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        permissions_users=utils.check_token_not_login(token)
        form_serializer = DestinationSerilazers(event_form, data=form_data["permissions"])
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse({"access_token":token,"data":form_serializer.data})

@csrf_exempt
def get_constans_fiald(fields_array):
    return HttpResponse(constants_fields_rank(fields_array.data),status=status.HTTP_204_NO_CONTENT)

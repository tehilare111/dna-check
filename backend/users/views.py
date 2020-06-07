from django.shortcuts import render
from users.models import Destination
from users.serializers import DestinationSerilazers
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# Create your views here.
###############################################################
#                      יצירת משתמש חדש                       #
###############################################################

@csrf_exempt 
def create_user(request):
    user_data = JSONParser().parse(request)
    user_serializer = DestinationSerilazers(data=user_data)
    if request.method == 'POST':
        if(user_serializer.is_valid()):
            if(check_user_and_personalnumbner(user_data)):
                return HttpResponse(status=status.HTTP_410_GONE)  
            else:
                user_serializer.save()
                return HttpResponse(status=status.HTTP_204_NO_CONTENT) 

###############################################################
#                      התחברות לאתר                          #
###############################################################

@csrf_exempt 
def check_login(request):
    user_data = JSONParser().parse(request)
    users_serializer = DestinationSerilazers(data=user_data)
    if request.method == 'POST':
        try:
            if (users_serializer.is_valid()): 
                users = Destination.objects.get(username=user_data["username"])
                if check_user_password(users.username,user_data["password"]):
                    return HttpResponse(status=status.HTTP_204_NO_CONTENT)
                else:
                    return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
        except Destination.DoesNotExist: 
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)  
    
    
     

################################################################
#                  בדיקת תקינות שם משתמש                     #
################################################################   


def check_user_password(username,password):
    customer_username=Destination.objects.filter(username=username,password=password).exists()
    return customer_username

def check_user_and_personalnumbner(user_data):
    if(Destination.objects.filter(username=user_data["username"]).exists()):
        return True
    else:
        if(Destination.objects.filter(personalnumber=user_data["personalnumber"]).exists()):
            return True
        else:
            return False
        
###############################################################
#                     קבלת קבוצת הרשאות                      #
###############################################################

@csrf_exempt
def groups_permissions_list(request, unit):
    '''
        Responsible to hendle requests froms main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    if request.method == 'GET':
        users = Destination.objects.filter(armyunit=unit)
        customer_u=DestinationSerilazers(users,many=True)
        return JsonResponse(customer_u.data, safe=False)
    
    elif request.method == 'DELETE':
        Destination.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

###############################################################
#                      עדכון משתמש                           #
###############################################################
@csrf_exempt 
def update_permissions_users(request,personalnumber):
    try: 
        event_form = Destination.objects.get(personalnumber=personalnumber) 
    except Destination.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    if request.method=='GET':
        customer_serializer = DestinationSerilazers(event_form)
        return JsonResponse(customer_serializer.data)
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        form_serializer = DestinationSerilazers(event_form, data=form_data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse(form_serializer.data)
        return JsonResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
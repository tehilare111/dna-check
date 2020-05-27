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
    users=""
    username=""
    customer_data = JSONParser().parse(request)
    customer_serializer = DestinationSerilazers(data=customer_data)
    if request.method == 'POST':
        if customer_data==None:
            return   
        if (customer_serializer.is_valid()):
            users=customer_serializer.initial_data
            username=users.pop("username"),users.pop("personalnumber")
            if(check_user_and_personalnumbner(username[0],username[1])):
                customer_data.update([('username',username[0]),('personalnumber',username[1]),("permissions","read")])
                customer_serializer_new=DestinationSerilazers(data=customer_data)
                if customer_serializer_new.is_valid():
                    #print(customer_serializer_new.data)
                    customer_serializer_new.save()
                    return JsonResponse({"result":'success'}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"result":"שם משתמש או מספר אישי אלה קימים במערכת"}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({"result":"חלק מהשדות לא תקינים או ריקים  אנה מלא את כל השדות"}, status=status.HTTP_200_OK)
           

###############################################################
#                      התחברות לאתר                          #
###############################################################

@csrf_exempt 
def check_login(request):
    customer_data = JSONParser().parse(request)
    users_serializer = DestinationSerilazers(data=customer_data)
    
    if request.method == 'POST':
        if (users_serializer.is_valid()):
            users = users_serializer
            username = users.data.pop("username"),users.data.pop("password")
            if(check_user_password(username[0],username[1])):
                return JsonResponse({"result":"success"}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"result":"שם משתמש או סיסמא לא נכונים"}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

#################################################################
#                  בדיקת תקינות שם משתמש                      #
#################################################################   


def check_user_password(username,password):
    customer_username=Destination.objects.filter(username=username)
    if len(customer_username)>0:
        customer_u=DestinationSerilazers(customer_username[0])
        if (username == customer_u.data.pop("username")):
            if(password==customer_u.data.pop("password")):
                return True
               
            else:
                return False

def check_user_and_personalnumbner(username,personalnumber):
        customer_username=Destination.objects.filter(username=username)
        if len(customer_username)>0:
            customer_u=DestinationSerilazers(customer_username[0])
            if (username == customer_u.data.pop("username")):
                return False
        else:
            customer_personal=Destination.objects.filter(personalnumber=personalnumber)
            if len(customer_personal)>0:
                customer_p=DestinationSerilazers(customer_personal[0])
                if personalnumber == customer_p.data.pop("personalnumber"):
                     return False
            else:
                return True

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
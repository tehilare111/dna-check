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
def customer_create(request):
    users=""
    username=""
    if request.method=='GET':
        customer_data = JSONParser().parse(request)
        customer_serializer = DestinationSerilazers(data=customer_data)
    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        if customer_data==None:
            return   
        customer_serializer = DestinationSerilazers(data=customer_data)
        if (customer_serializer.is_valid()):
            users=customer_serializer.initial_data
            username=users.pop("username"),users.pop("personalnumber")
            if(check_user_and_personalnumbner(username[0],username[1])):
                customer_data.update([('username',username[0]),('personalnumber',username[1]),("permissions","read")])
                customer_serializer_new=DestinationSerilazers(data=customer_data)
              
                if customer_serializer_new.is_valid():
                    print(customer_serializer_new.data)
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
def CheckLogin(request):
    users=""
    username=""
    if request.method=='GET':
        customer_data = JSONParser().parse(request)
        customer_serializer = DestinationSerilazers(data=customer_data)
    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        if customer_data!=None:
            customer_serializer = DestinationSerilazers(data=customer_data)
            if (customer_serializer.is_valid()):
                users=customer_serializer
                username=users.data.pop("username"),users.data.pop("password")
                if(check_user_password(username[0],username[1])):
                   return JsonResponse({"result":"success"}, status=status.HTTP_200_OK)
                else:
                    return JsonResponse({"result":"שם משתמש או סיסמא לא נכונים"}, status=status.HTTP_200_OK)
                
            else:
                return JsonResponse({"result":"שם מתמש או סיסמא לא נכונים "}, status=status.HTTP_200_OK)
#################################################################
#                  בדיקת תקינות שם משתמש                      #
#################################################################   


def check_user_password(username,password):
    customer_username=Destination.objects.filter(username=username)
    if len(customer_username)>0:
        customer_u=DestinationSerilazers(customer_username[0])
        print(customer_u.data)
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
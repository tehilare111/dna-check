from django.shortcuts import render
from users.models import  Users
from users.serializers import UsersSerilazers
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from management.utils import constants_fields_array
from management.models import UnitsTree, ConstantsFields
from users.utils import check_permissions_dec , MANAGER, EVENTS_REPORTER, EVENTS_CHECKER, check_token, create_jwt, REPORTER_MANAGER, EVENT_AUTHORIZER


###############################################################
#                      Create new user                        #
###############################################################
@csrf_exempt 
@check_permissions_dec([MANAGER, REPORTER_MANAGER])
def create_user(request):
    user_data = JSONParser().parse(request)
    user_serializer = UsersSerilazers(data=user_data)
    if request.method == 'POST':
        if(user_serializer.is_valid()):
            if(not check_user_and_personal_number(user_data)):
                user_serializer.save()
                return HttpResponse(status=status.HTTP_204_NO_CONTENT)  
            elif(Users.objects.filter(personalNumber=user_data["personalNumber"], permissions=EVENT_AUTHORIZER).exists()): # Avoid sending error when the existing user is event authorizer.
                if(user_data.permissions != EVENT_AUTHORIZER): # If user known as event authorizer created as permanent user the event authorizer user deleted.
                    delete_user(request)
                    user_serializer.save()
                else: # Avoid sending error when a event authorizer shared with multiple forms. 
                    return HttpResponse(status=status.HTTP_204_NO_CONTENT)
            elif(user_data["permissions"] == EVENT_AUTHORIZER): # Avoid sending error when the user that request to be added as event authorizer already a permanent user. 
                return HttpResponse(status=status.HTTP_204_NO_CONTENT)

        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
    
###############################################################
#                         Login page                          #
###############################################################
@csrf_exempt 
def check_login(request):
    user_data = JSONParser().parse(request)
    if request.method == 'POST':
        try:
            user = Users.objects.get(username=user_data["username"])
        except:
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)
            
        if check_user_password(user.username, user_data["password"]):
            user_serialized_data = UsersSerilazers(user).data
            user_serialized_data.update(access_token=create_jwt(user_data))
            return JsonResponse(user_serialized_data , safe=False)
        else:
            return HttpResponse(status=status.HTTP_401_UNAUTHORIZED)

################################################################
#                     Check propriety user                     #
################################################################

################## Check password ##############################
def check_user_password(username,password):
    return Users.objects.filter(username=username,password=password).exists()

################### Check personal number ######################
def check_user_and_personal_number(user_data):
    return (Users.objects.filter(username=user_data["username"]).exists() or Users.objects.filter(personalNumber=user_data["personalNumber"]).exists())

###############################################################
#                    Get groups permissions                   #
###############################################################
@csrf_exempt 
@check_permissions_dec([MANAGER, REPORTER_MANAGER])
def groups_permissions_list(request, unit, token):
    if request.method == 'GET':
            users = Users.objects.filter(unit=unit)
            customer_u=UsersSerilazers(users,many=True)
            return JsonResponse(customer_u.data, safe=False)     
    elif request.method == 'DELETE':
        Users.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
###############################################################
#                         Update user                         #
###############################################################
@csrf_exempt 
@check_permissions_dec([MANAGER, REPORTER_MANAGER])
def update_permissions_users(request, personalnumber):
    try: 
        event_form = Users.objects.get(personalNumber=personalnumber)
    except Users.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    if request.method=='GET':
        customer_serializer = UsersSerilazers(event_form)
        return JsonResponse(customer_serializer.data)
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        form_serializer = UsersSerilazers(event_form, data=form_data["permissions"])
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse({"data":form_serializer.data},status=status.HTTP_204_NO_CONTENT)

###############################################################
#                         Delete user                         #
###############################################################
@csrf_exempt 
@check_permissions_dec([MANAGER, REPORTER_MANAGER])
def delete_user(request):
    if request.method=='POST':
        form_data = JSONParser().parse(request)
        try: 
            event_form = Users.objects.get(personalNumber=form_data['personalNumber']) # Looking for user with this personal number at the DB.
        except Users.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) # Return 404 if there is no user with this personal number in the DB.
        event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
            

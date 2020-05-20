from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser, FileUploadParser, MultiPartParser, FormParser
from rest_framework import status
from django.db.models import Max
from datetime import datetime
from django.conf import settings

from rest_framework.views import APIView

from forms.models import FormsTable
from forms.serializers import FormsSerializer

import time
import os
    
@csrf_exempt
def forms_list(request, event_type):
    '''
        Responsible to hendle requests froms main control table page.
        Relevant urls: /api/forms/*
        GET - Return all forms matching the given event type on the url.
              Return all rows from table when no url specified.
        DELETE - Delete all table content. 
    '''
    
    if request.method == 'GET':
        if event_type == '':
            forms = FormsTable.objects.all()
            print('forms:', forms)
        else:
            forms = FormsTable.objects.filter(eventType=event_type)
        
        form_serializer = FormsSerializer(forms, many=True)

        return JsonResponse(form_serializer.data, safe=False)
    
    elif request.method == 'DELETE':
        FormsTable.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


###############################################################
#                      יצירת משתמש חדש                       #
###############################################################

@csrf_exempt 
def customer_create(request):
    users=""
    usernamechack=''
    username=""
    personal=""
    personalchack=''
    customer=""
    errorsdata={"errors":"the user name is exsist"}
    if request.method=='GET':
        print("custumer-list", request.headers["Origin"])
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        print (customer_data)
        if customer_data!=None:
            customer_serializer = CustomerSerializer(data=customer_data)
            if (customer_serializer.is_valid()):
                users=customer_serializer.initial_data
                username=users.pop("username").split(":")
                username=username[0]
                personal=users.pop("personalnumber").split(",")
                personal=personal[0]
                print ("username:",username,"personalnumber:",personal)
                customer_username=Destination.objects.filter(username=username)
                if len(customer_username)>0:
                    customer_u=CustomerSerializer(customer_username[0])
                    usernamechack=customer_u.data
                    usernamechack=usernamechack.pop("username")
                    if (username in usernamechack):
                        print("username",username)
                        return JsonResponse({"result":"The user name is exsist"}, status=status.HTTP_200_OK)
                else:
                    customer_personal=Destination.objects.filter(personalnumber=personal)
                    if len(customer_personal)>0:
                        customer_p=CustomerSerializer(customer_personal[0])
                        personalchack=customer_p.data
                        personalchack=personalchack.pop("personalnumber")
                        if personal in personalchack:
                           return JsonResponse({"result":"The personal number is exsist"}, status=status.HTTP_200_OK) 
                        if len(usernamechack)==0:
                             print ("seccsees")
                        customer_data.update([('username',username),('personalnumber',personal),("rank","shamal"),("permissions","read")])
                        #customer_serializer.update(customer_data)
                        customer_serializer_new=CustomerSerializer(data=customer_data)
                        print(customer_serializer)
                        if customer_serializer_new.is_valid():
                            customer_serializer_new.save()
                            return JsonResponse({"result":"seccsess"}, status=status.HTTP_200_OK)
            else:
                return JsonResponse({"result":"the last and first nad password and pesonal and armyunit and posistion is null"}, status=status.HTTP_200_OK)

###############################################################
#                      קבלת שם משתמש                         #
###############################################################

@csrf_exempt 
def customer_detail_Users_username(request,username):
    print("custumer-detail", request.method)
    try: 
        users=[]
        customer=Destination.objects.filter(username=username)
        for i in customer:
            users.append(i)
    except Destination.DoesNotExist: 
        customer=None 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    print(request.method)
    if request.method == 'GET':
        if (len(users)>0):

            customer_serializer=CustomerSerializer(users[0])
        else:
            customer_serializer=CustomerSerializer(users)
        return JsonResponse(customer_serializer.data) 
 
    elif request.method == 'PUT': 
        print("reach here")
        customer_data = JSONParser().parse(request) 
        customer_serializer = CustomerSerializer(customer, data=customer_data) 
        if customer_serializer.is_valid(): 
            print("reach here2")
            customer_serializer.save() 
            return JsonResponse(customer_serializer.data) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        customer.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)




@csrf_exempt
def new_event_form(request):
    '''
        New Event Form load all its initial values from here.
        Relevant url: /api/event_forms/
    '''
    if request.method == 'GET':
        dt = datetime.today()
        payload = {'datetime': '{}/{}/{}'.format(dt.day, dt.month, dt.year)}
        return JsonResponse(payload, safe=False)
'''
@csrf_exempt
def existing_event_form(request, reference):
    try: 
        event_form = FormsTable.objects.get(reference=reference) 
    except FormsTable.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET':
        form_serializer = FormsSerializer(event_form)
        return JsonResponse(form_serializer.data)
 
    elif request.method == 'PUT':
        form_data = JSONParser().parse(request)
        form_serializer = FormsSerializer(event_form, data=form_data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse(form_serializer.data)
        return JsonResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
    elif request.method == 'DELETE': 
        event_form.delete() 
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
'''

@csrf_exempt
def download_file(request, path):
    '''
        Download file from given path in the request url.
    '''
    file_path = os.path.join(settings.MEDIA_ROOT, path)
    print('file_path', file_path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    return HttpResponse(status=status.HTTP_404_NOT_FOUND)



class NewEventFrom(APIView):

    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        form_serializer = FormsSerializer(data=request.data)
        if form_serializer.is_valid():
            form_serializer.save(reference = int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1)
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, reference,*args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference) 
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        form_serializer = FormsSerializer(event_form, data=request.data)
        if form_serializer.is_valid():
            form_serializer.save()
            return JsonResponse(form_serializer.data, status=status.HTTP_201_CREATED ) 
        else:
            return HttpResponse(form_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference) 
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    
        form_serializer = FormsSerializer(event_form)
        return JsonResponse(form_serializer.data)

    def delete(self, request, reference, *args, **kwargs):
        try: 
            event_form = FormsTable.objects.get(reference=reference)
        except FormsTable.DoesNotExist: 
            return HttpResponse(status=status.HTTP_404_NOT_FOUND) 

        event_form.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


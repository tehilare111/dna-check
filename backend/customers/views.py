from django.shortcuts import render 
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.db.models import Max
from datetime import datetime
import json

from customers.models import LostForm
from customers.models import Destination
from customers.serializers import CustomerSerializer



@csrf_exempt
def customer_list(request):
    print("custumer-list", request.headers["Origin"])
    if request.method == 'GET':
        customers = LostForm.objects.all()
        customers_serializer = CustomerSerializer(customers, many=True)

        return JsonResponse(customers_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'

    elif request.method == 'POST':
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data=customer_data)
        if customer_serializer.is_valid():
            customer_serializer.save()
            print ("shalom1")
            return JsonResponse(customer_serializer.data, status=status.HTTP_201_CREATED ) 
        return JsonResponse(customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        LostForm.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)



@csrf_exempt 
def customer_insert(request):
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
         
@csrf_exempt 
def customer_detail(request, pk):
    print("custumer-detail", request.method)
    try: 
        customer = LostForm.objects.get(pk=pk)
        print (customer,"shalom10010010") 
    except LostForm.DoesNotExist: 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        customer_serializer = CustomerSerializer(customer)
        for i in customer_serializer:
            print (i) 
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
def customer_detail_Users_Personal_number(request,personalnumber):
    print("custumer-detail", request.method)
    try: 
        users=[]
        customer=Destination.objects.filter(personalnumber=personalnumber)
        for i in customer:
            users.append(i)
    except Destination.DoesNotExist: 
        customer=None 
        return HttpResponse(status=status.HTTP_404_NOT_FOUND) 
    print(request.method)
    if request.method == 'GET':
        if (len(users)>0):
            users.append(personalnumber)
            print (users)
            customer_serializer=CustomerSerializer(users[0])
        else:
            print(users)
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
def customer_list_age(request, age):
    customers = LostForm.objects.filter(age=age)
        
    if request.method == 'GET': 
        customers_serializer = CustomerSerializer(customers, many=True)
        return JsonResponse(customers_serializer.data, safe=False)
        # In order to serialize objects, we must set 'safe=False'
    
@csrf_exempt
def new_event_form(request):
    
    if request.method == 'GET':
        #print(LostForm.objects.filter(reference=0))
        #return HttpResponse(status=status.HTTP_204_NO_CONTENT)
        #max__reference = LostForm.objects.aggregate(Max('reference'))['reference__max']
        # customers_serializer = CustomerSerializer(max__reference, many=True)
        # return JsonResponse(customers_serializer.data, safe=False)
        dt = datetime.today()
        payload = {'datetime': '{}/{}/{}'.format(dt.day, dt.month, dt.year)}

        return JsonResponse(payload, safe=False)
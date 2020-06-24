from jose import jwt
from django.http import HttpResponse
import datetime
from django.contrib.auth import authenticate
from _datetime import timedelta
from users import views
from rest_framework import status
from django.http.response import JsonResponse
from management import views
from users.models import  Destination
from users.serializers import DestinationSerilazers
from django.contrib.auth import get_user_model

secret='''PDvnOudatcLzb/i2cCVFQgIEUgTbehke5iN2QRF7Vqo2zYOzdXMuelzf5/DL+g7+
        sdXic+dLR+obFfHNwMjmaQLFRM8IAtjT2iLlIBc1amcUMx2Vy5dIlVWTA0p79bkL
        syRrY+HK8IGok4tmPAOgDIesVnWeT1i1R/7gc6jX2J84UeKM0f4wIqE/zx0oR8XI
        mZa4rpuzPmPgc+1rqFpIE8ZchdDWT+vW4vwMzQZw1Jx3sP/ubOA9rQGZoCPu4BA0
        GZ+o8wn9OFgRnOiIjJ3eVlowmz++LfqxYpFeacCbxQPh5taVQWjiPMhWRLhN2Hke
        pGD5/rjdGz2ckTM/ge9uN4Z5niX7pq02VCz5qQC9txRnefcVOLEJg5RzCrtHVVe6
        wMlYPBATeuVsPuZTPaf8ZXQblaAslSkugbKyipt0fjuflD4Ffu9eODMHCyUb8uvD
        1fZjYXAI5ydaUFwfgN/M74F12m/DMgDVS6S267j9X4T1WHgAuDY/6Gkx6iY3oXFP
        mSYBkcixaH1/+dMStDJ2OdfsmIljuhMJEedogU1SnfbQhTYLvGNiKulL6YLwwIck
        hTwkFgW7OrZo4M9tvVqL8g=='''

def create_jwt(user_data):
        expiry=""
        """
        the above token need to be saved in database, and a one-to-one
        relation should exist with the username/user_pk
        """
        
        username = user_data['username']
        password = user_data['password']
        
        user = authenticate(username=username, password=password)
        if user is not None:
            expiry = datetime.date.today() + timedelta(days=50)
        token = jwt.encode({'username': username,'password':password}, 'secret', algorithm='HS256')
        if check_token(token):
            return token
        else:
            return False

def check_token(tokens):
    try:
        auth=jwt.decode(tokens,'secret', algorithms=['HS256'])
        return True
    except Exception as e:
        return False 

def get_permissions(username):
    event_form = Destination.objects.get(username=username)
    customer_serializer = DestinationSerilazers(event_form)
    return customer_serializer.data["permissions"]

def check_token_not_login(tokens):
    try:
        auth=jwt.decode(tokens,'secret', algorithms=['HS256'])
        return get_permissions(auth["username"])
        
    except Exception as e:
        return False 

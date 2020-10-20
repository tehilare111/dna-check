from django.db import models
from django.contrib.auth.models import AbstractBaseUser,AbstractUser
from django.db.models import JSONField
from django.contrib.auth.models import Group


# Create your models here.
class Users(AbstractUser):
    
    username = models.CharField(max_length=150, blank=False, default='',unique=True)
    firstName = models.CharField(max_length=150, blank=False, default='')
    lastName = models.CharField(max_length=150, blank=False, default='')
    password = models.CharField(max_length=150, blank=False, default='')
    personalNumber = models.CharField(max_length=150, blank=False, default='')
    rank = models.CharField(max_length=150, blank=False, default='')
    position = models.CharField(max_length=150, blank=False, default='')
    permissions = models.CharField(max_length=150, blank=False, default='')
    unit = models.CharField(max_length=150,blank=False,default=' ')
    
    # Json with all form's refereneces and its number of unreaded message. 
    # Format: {"form reference (int)": unreaded messages amount (int)}. e.g.: { "1" : 3 }
    unreadedMessages = JSONField(default=dict)
    
    
    USERNAME_FILED='last_login'
    manager_system = 1
    edit_events = 2
    watching_events =3
    ROLE_CHOICES = (
        (manager_system, 'מנהלן'),
        (edit_events, 'מדווח אירועים'),
        (watching_events, 'צופה אירועים'),
    )

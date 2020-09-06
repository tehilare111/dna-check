from django.db import models
from django.contrib.auth.models import AbstractBaseUser,AbstractUser

from django.contrib.auth.models import Group


# Create your models here.
class Users(AbstractUser):
    
    username=models.CharField(max_length=150, blank=False, default='',unique=True)
    firstname=models.CharField(max_length=150, blank=False, default='')
    lastname=models.CharField(max_length=150, blank=False, default='')
    password=models.CharField(max_length=150, blank=False, default='')
    personalnumber=models.CharField(max_length=150, blank=False, default='')
    rank=models.CharField(max_length=150, blank=False, default='')
    armyposistion=models.CharField(max_length=150, blank=False, default='')
    permissions=models.CharField(max_length=150, blank=False, default='')
    armyunit=models.CharField(max_length=150,blank=False,default=' ')
    USERNAME_FILED='last_login'
    manager_system = 1
    edit_events = 2
    watching_events =3
    ROLE_CHOICES = (
        (manager_system, 'מנהלן'),
        (edit_events, 'מדווח אירועים'),
        (watching_events, 'צופה אירועים'),
        
    )

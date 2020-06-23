from django.db import models
from django.contrib.auth.models import AbstractBaseUser,AbstractUser




# Create your models here.
class Destination(AbstractUser):
    
    username=models.CharField(max_length=150, blank=False, default='')
    firstname=models.CharField(max_length=150, blank=False, default='')
    lastname=models.CharField(max_length=150, blank=False, default='')
    password=models.CharField(max_length=150, blank=False, default='')
    personalnumber=models.CharField(max_length=150, blank=False, default='')
    rank=models.CharField(max_length=150, blank=False, default='')
    armyposistion=models.CharField(max_length=150, blank=False, default='')
    permissions=models.CharField(max_length=150, blank=False, default='')
    armyunit=models.CharField(max_length=150,blank=False,default=' ')
    
class users(AbstractUser):
    manager_system = 1
    edit_events = 2
    watching_events =3
    ROLE_CHOICES = (
        (manager_system, 'manager'),
        (edit_events, 'edit'),
        (watching_events, 'watching'),
    )
    USERNAME_FILED='last_name'

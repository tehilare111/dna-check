from django.db import models
from django.contrib.auth.models import AbstractBaseUser



# Create your models here.
class Destination(AbstractBaseUser):
    username=models.CharField(max_length=150, blank=False, default='')
    firstname=models.CharField(max_length=150, blank=False, default='')
    lastname=models.CharField(max_length=150, blank=False, default='')
    password=models.CharField(max_length=150, blank=False, default='')
    personalnumber=models.CharField(max_length=150, blank=False, default='')
    rank=models.CharField(max_length=150, blank=False, default='')
    armyposistion=models.CharField(max_length=150, blank=False, default='')
    permissions=models.CharField(max_length=150, blank=False, default='')
    armyunit=models.CharField(max_length=150,blank=False,default=' ')
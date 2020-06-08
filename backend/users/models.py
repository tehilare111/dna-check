from django.db import models

# Create your models here.
class Destination(models.Model):
    username=models.CharField(max_length=70, blank=False, default='')
    firstname=models.CharField(max_length=70, blank=False, default='')
    lastname=models.CharField(max_length=70, blank=False, default='')
    password=models.CharField(max_length=70, blank=False, default='')
    personalnumber=models.CharField(max_length=70, blank=False, default='')
    rank=models.CharField(max_length=70, blank=False, default='')
    armyposistion=models.CharField(max_length=70, blank=False, default='')
    permissions=models.CharField(max_length=70, blank=False, default='')
    armyunit=models.CharField(max_length=70,blank=False,default=' ')
from django.db import models

# Create your models here.
class Destination(models.Model):
    username=models.CharField(max_length=100)
    fisrname=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    personalnumber=models.CharField(max_length=100)
    rank=models.CharField(max_length=100)
    armyposistion=models.CharField(max_length=100)

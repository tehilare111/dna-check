from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Msgs(models.Model):
    reference = models.IntegerField(primary_key=True, blank=False, default=0)
    reporterUnit = models.CharField(max_length=70, blank=False, default='')
    messages = ArrayField(models.CharField(max_length=150, blank=True, null=True), size=100, null=True, blank=True, default=list)
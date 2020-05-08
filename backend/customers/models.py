from django.db import models
from django.db.models import Max

class UploadTo:
  def __init__(self, field):
    self.field = field

  def __call__(self, instance, filename):
    # reference = str(int(LostForm.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1)
    return '{}/{}/{}'.format(instance.reference, self.field, filename)

  def deconstruct(self):
    return ('customers.models.UploadTo', [self.field], {})

class LostForm(models.Model):
    # name = models.CharField(max_length=70, blank=False, default='')
    # age = models.IntegerField(blank=False, default=1)
    # active = models.BooleanField(default=False)
    
    reference = models.IntegerField(blank=False, default=0)
    eventType = models.CharField(max_length=70, blank=False, default='')
    date = models.CharField(max_length=70, blank=False, default='')
    reporterName = models.CharField(max_length=70, blank=False, default='')
    reporterUnit = models.CharField(max_length=70, blank=False, default='')
    caseIdOnMetzah = models.CharField(max_length=70, blank=False, default='')
    handlingResults = models.CharField(max_length=70, blank=False, default='')
    eventStatus = models.CharField(max_length=70, blank=False, default='')
    handlingStatus = models.CharField(max_length=70, blank=False, default='')
    signerUnit = models.CharField(max_length=70, blank=False, default='')
    signerName = models.CharField(max_length=70, blank=False, default='')
    signerId = models.CharField(max_length=70, blank=False, default='')
    rank = models.CharField(max_length=70, blank=False, default='')
    position = models.CharField(max_length=70, blank=False, default='')
    eventDate = models.CharField(max_length=70, blank=False, default='')
    eventHour = models.CharField(max_length=70, blank=False, default='')
    equipment = models.CharField(max_length=70, blank=False, default='')
    equipmentType = models.CharField(max_length=70, blank=False, default='')
    equipmentMark = models.CharField(max_length=70, blank=False, default='')
    equipmentMakat = models.CharField(max_length=70, blank=False, default='')
    eventRelevantPlacesAndFactors = models.CharField(max_length=70, blank=False, default='')
    eventInitialDetails = models.CharField(max_length=70, blank=False, default='')
    investigationDate = models.CharField(max_length=70, blank=False, default='')
    investigationFile = models.FileField(upload_to=UploadTo('investigationFile'), max_length=100, blank=True, null=True)
    handlingDate = models.CharField(max_length=70, blank=False, default='')
    findingDate = models.CharField(max_length=70, blank=False, default='')
    findingFile = models.FileField(upload_to=UploadTo('findingFile'), max_length=100, blank=True, null=True)
    handlingFile = models.FileField(upload_to=UploadTo('handlingFile'), max_length=100, blank=True, null=True)
    messages = models.CharField(max_length=70, blank=False, default='')
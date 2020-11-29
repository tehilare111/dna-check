from django.db.models import JSONField
from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class UnitsTree(models.Model):
    # static value only for represting it and pull it from db
    unitTreeId = models.IntegerField(blank=False, default=0)
    # max tree node id in the tree
    maxTreeNodeId = models.IntegerField(blank=False, default=0)
    # the tree node itself
    treeNode = JSONField()


class ConstantFieldsWithId(models.Model):
    idOfConstantField = models.IntegerField(primary_key=True, blank=False, default=0)
    constantFieldName = models.CharField(max_length = 30)
    categroryId = models.IntegerField(default= -1)
    fieldOfCategoryId = models.IntegerField(default= -1)
    isCategory = models.BooleanField(default= False)
    isDeleted = models.BooleanField(default= False)
    constantFieldNameHebrew = models.CharField(max_length = 30)
 
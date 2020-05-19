from django.contrib.postgres.fields import JSONField
from django.db import models

# Create your models here.
class UnitsTree(models.Model):
    # static value only for represting it and pull it from db
    unitTreeId = models.IntegerField(blank=False, default=0)
    # max tree node id in the tree
    maxTreeNodeId = models.IntegerField(blank=False, default=0)
    # the tree node itself
    treeNode = JSONField()
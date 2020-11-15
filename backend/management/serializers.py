from rest_framework import serializers 
from management.models import UnitsTree, ConstantFieldsWithId

class UnitsTreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitsTree
        fields = (
            'unitTreeId',
            'maxTreeNodeId',
            'treeNode',
        )



class ConstantFieldsWithIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConstantFieldsWithId
        fields = (
            'idOfConstantField',
            'constantFieldName',
            'categroryId',
            'fieldOfCategoryId',
            'isCategory',
            'isDeleted',
            'constantFieldNameHebrew'
        )


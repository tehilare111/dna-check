from rest_framework import serializers 
from management.models import UnitsTree, ConstantsFields, ConstantFieldsWithId

class UnitsTreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitsTree
        fields = (
            'unitTreeId',
            'maxTreeNodeId',
            'treeNode',
        )

class ConstantsFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConstantsFields
        fields = (
            'equipmentType',
            'materialType',
            'equipmentMakat',
            'eventStatus',
            'rank',
            'handlingStatus'
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
        )


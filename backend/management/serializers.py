from rest_framework import serializers 
from management.models import UnitsTree

class UnitsTreeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnitsTree
        fields = (
            'unitTreeId',
            'maxTreeNodeId',
            'treeNode',
        )

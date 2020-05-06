from rest_framework import serializers 
from customers.models import LostForm


class CustomerSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = LostForm
        # print(model.upload_to())
        fields = ('reference',
            'eventType',
            'date',
            'reporterName',
            'reporterUnit',
            'caseIdOnMetzah',
            'handlingResults',
            'eventStatus',
            'handlingStatus',
            'signerUnit',
            'signerName',
            'signerId',
            'rank',
            'position',
            'eventDate',
            'eventHour',
            'equipment',
            'equipmentType',
            'equipmentMark',
            'equipmentMakat',
            'eventRelevantPlacesAndFactors',
            'eventInitialDetails',
            'investigationDate',
            'investigationFile',
            'handlingDate',
            'findingDate',
            'findingFile',
            'handlingFile',
            'messages'
        )
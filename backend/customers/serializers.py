from rest_framework import serializers 
from customers.models import LostForm
from customers.models import Destination


class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = LostForm
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
            'eventInitialDetails',)
            
        model= Destination
        fields=('username',
            'firstname',
            'lastname',
            'password',
            'personalnumber',
            'rank',
            'armyposistion',
            'permissions',
            'armyunit',)
        
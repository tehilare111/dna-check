from rest_framework import serializers 
from customers.models import Form, EventForm, LostForm


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        abstract = True
        fields = (
            'reference',
            'eventType',
            'date',
            'reporterName',
            'reporterUnit',            
            'editStateBlocked'
        )

class EventFormSerializer(FormSerializer):
    class Meta(FormSerializer.Meta):
        model = EventForm
        abstract = True
        fields = FormSerializer.Meta.fields + (
            'caseIdOnMetzah',
            'handlingResults',
            'eventStatus',
            'handlingStatus',
        )

class LostFormSerializer(EventFormSerializer):
    class Meta:
        model = LostForm
        fields = EventFormSerializer.Meta.fields + (
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
            'messages',
        )
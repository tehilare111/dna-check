
from rest_framework import serializers 
from forms.models import Form, EventForm, FormsTable,Destination


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
            'editStateBlocked',)

        model = Destination
        fields=('username',
            'firstname',
            'lastname',
            'password',
            'personalnumber',
            'rank',
            'armyposistion',
            'permissions',
            'armyunit',)

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

class FormsSerializer(EventFormSerializer):
    class Meta:
        model = FormsTable
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
            'handlingDate',
            'investigationFile',
            'findingDate',
            'findingFile',
            'handlingFile',
            'messages',
            'reviewDate',
            'reviewFile',
            'reviewReference',
            'isMatchToReport'
        )

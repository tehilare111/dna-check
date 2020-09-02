
from rest_framework import serializers 
from forms.models import Form, EventForm, FormsTable,EventsEquipments


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
            'editStateBlocked',
            'writtenInFormals',
            'writtenInDrafts')

        
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

class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        unique_together = ['reference', 'equipment','equipmentType', 'equipmentMark','equipmentMakat']
        model=EventsEquipments
        fields=(
        'equipment',
        'equipmentType',
        'equipmentMark',
        'equipmentMakat',
        )

class FormsSerializer(EventFormSerializer):
    equipments = EquipmentSerializer(many=True)
    class Meta:
        model = FormsTable
        
        fields =EventFormSerializer.Meta.fields + (
            'signerUnit',
            'signerName',
            'signerId',
            'rank',
            'position',
            'eventDate',
            'eventHour',
            'eventRelevantPlacesAndFactors',
            'eventInitialDetails',
            'investigationDate',
            'handlingDate',
            'investigationFile',
            'findingDate',
            'findingFile',
            'handlingFile',
            'reviewDate',
            'reviewFile',
            'reviewReference',
            'isMatchToReport'
        )

            'isMatchToReport',
            'equipments',
        )



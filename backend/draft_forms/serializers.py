
from rest_framework import serializers 
from draft_forms.models import DraftForm, DraftEventForm, DraftFormsTable


class DraftFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = DraftForm
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

        
class DraftEventFormSerializer(DraftFormSerializer):
    class Meta(DraftFormSerializer.Meta):
        model = DraftEventForm
        abstract = True
        fields = DraftFormSerializer.Meta.fields + (
            'caseIdOnMetzah',
            'handlingResults',
            'eventStatus',
            'handlingStatus',
        )

class DraftFormsSerializer(DraftEventFormSerializer):
    class Meta:
        model = DraftFormsTable
        fields = DraftEventFormSerializer.Meta.fields + (
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
            'reviewDate',
            'reviewFile',
            'reviewReference',
            'isMatchToReport'
        )
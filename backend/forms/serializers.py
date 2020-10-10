
from rest_framework import serializers 
from forms.models import Form, EventForm, FormsTable


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
            'writtenInDrafts',
            'eventAuthorizers')

        
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
            'reviewDate',
            'reviewFile',
            'reviewReference',
            'isMatchToReport'
        )
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields:
            #MultipleFileField change to list field so multiple files can be serialized
            if isinstance(self.fields[field], serializers.ModelField):
                self.fields[field] =  serializers.ListField(child=serializers.FileField(required=False),default = None, required=False)

    def update(self, instance, validated_data):
        #MultipleFileFileld override previous value by default when update model
        #overriding the default behavior by appending the previous field.
        # the filtering is field based on filed type list
        for key in validated_data:   
            prev = getattr(instance, key) # get instance.<key>  
            if isinstance(prev,list):
                if validated_data.get(key):
                    setattr(instance, key ,prev+validated_data.get(key)) # instance.<key> += validated_data
            #append only relevent for MultipleFileField, other fields just update 
            else:   
                setattr(instance, key, validated_data.get(key))
        instance.save()
        return instance

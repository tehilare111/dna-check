
from rest_framework import serializers 
import json
from draft_forms.models import DraftForm, DraftEventForm, DraftFormsTable,DraftEventsEquipments


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
class DraftEquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=DraftEventsEquipments
        fields=[
        'equipment',
        'equipmentType',
        'equipmentMark',
        'equipmentMakat',
        ]

class DraftFormsSerializer(DraftEventFormSerializer):
    class Meta:
        equipments=DraftEquipmentSerializer(many=True,required=False)
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
            'isMatchToReport',
            'equipments',
        )
    def saveAll(self,request,reference):
        self.save(reference=reference,writtenInFormals=True)
        print("self after save",self)
        print("SELF",request)
        equip=" "
        data=request.data["equipments"]
        data = data.split("$$")[1:-1]
        data2=[json.loads(eq[1:-1]) for eq in data]
        for equipment in data2:
            equip=DraftEquipmentSerializer(data=equipment)
            print("data beffor ",equip)
            if equip.is_valid():
                print("Data: ",self.instance)
                print("shalom tehila")
                equip.save(reference1=self.instance)
                print("equips after",equip)
                
                
            else:
                print(equip.errors)
                return equip.errors
        if equip!=" ":
            return equip
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

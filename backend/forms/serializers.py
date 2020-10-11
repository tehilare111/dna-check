
from rest_framework import serializers 
from forms.models import Form, EventForm, FormsTable,EventsEquipments
from django import forms
from django.http import QueryDict
import json
from django.db.models import Max
from django.http.response import JsonResponse
from django.http import HttpResponse
from rest_framework import status


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
        model=EventsEquipments
        fields=[
        'equipment',
        'equipmentType',
        'equipmentMark',
        'equipmentMakat',
        ]
    # def save(self,*args, **kwargs):
    #   print("bar agever:",self)
    
class FormsSerializer(serializers.ModelSerializer):
    equipments=EquipmentSerializer(many=True,required=False)
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
            equip=EquipmentSerializer(data=equipment)
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

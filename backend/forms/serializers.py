from rest_framework import serializers 
from forms.models import Form, EventForm, FormsTable,EventsEquipments
from django import forms
from django.http import QueryDict
from forms.models import EventsEquipments
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
    
class FormsSerializer(serializers.ModelSerializer):
    equipments=EquipmentSerializer(many=True,required=False)
    
    class Meta:
        model = FormsTable
        fields =EventFormSerializer.Meta.fields+(
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
            

    def saveAll(self,request):
        self.save(reference=int(FormsTable.objects.aggregate(Max('reference'))['reference__max'] or 0) + 1)
        print("SELF",request)
        data=request.data["equipments"]
        data = data.split("$$")[1:-1]
        data2=[json.loads(eq[1:-1]) for eq in data]
        for i in data2:
            equip=EquipmentSerializer(data=i)
            if equip.is_valid():
                print("shalom tehila")
                equip.save(reference1=self.instance)
            else:
                print(equip.errors)
                return HttpResponse(equip.errors,status=status.HTTP_400_BAD_REQUEST)
        return JsonResponse(equip.data, status=status.HTTP_201_CREATED )

      
>>>>>>> a1b6c11... add A new feature of the amount of equipment in one form


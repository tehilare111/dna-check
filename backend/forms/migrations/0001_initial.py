# Generated by Django 3.0.5 on 2020-06-21 10:34

from django.db import migrations, models
import forms.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormsTable',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reference', models.IntegerField(default=0)),
                ('eventType', models.CharField(default='', max_length=70)),
                ('date', models.CharField(default='', max_length=70)),
                ('reporterName', models.CharField(default='', max_length=70)),
                ('reporterUnit', models.CharField(default='', max_length=70)),
                ('editStateBlocked', models.BooleanField(default=False)),
                ('caseIdOnMetzah', models.CharField(default='', max_length=70)),
                ('handlingResults', models.CharField(default='', max_length=70)),
                ('eventStatus', models.CharField(default='', max_length=70)),
                ('handlingStatus', models.CharField(default='', max_length=70)),
                ('messages', models.CharField(default='', max_length=70)),
                ('equipment', models.CharField(default='', max_length=70)),
                ('equipmentType', models.CharField(default='', max_length=70)),
                ('equipmentMark', models.CharField(default='', max_length=70)),
                ('equipmentMakat', models.CharField(default='', max_length=70)),
                ('signerUnit', models.CharField(default='', max_length=70)),
                ('signerName', models.CharField(default='', max_length=70)),
                ('signerId', models.CharField(default='', max_length=70)),
                ('rank', models.CharField(default='', max_length=70)),
                ('position', models.CharField(default='', max_length=70)),
                ('eventDate', models.CharField(default='', max_length=70)),
                ('eventHour', models.CharField(default='', max_length=70)),
                ('eventRelevantPlacesAndFactors', models.CharField(default='', max_length=70)),
                ('eventInitialDetails', models.CharField(default='', max_length=70)),
                ('investigationDate', models.CharField(default='', max_length=70)),
                ('investigationFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('investigationFile'))),
                ('handlingDate', models.CharField(default='', max_length=70)),
                ('findingDate', models.CharField(default='', max_length=70)),
                ('findingFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('findingFile'))),
                ('handlingFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('handlingFile'))),
                ('reviewFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('reviewFile'))),
                ('reviewDate', models.CharField(default='', max_length=70)),
                ('reviewReference', models.CharField(default='', max_length=70)),
                ('isMatchToReport', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

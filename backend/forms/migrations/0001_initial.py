<<<<<<< HEAD
# Generated by Django 3.0.6 on 2020-10-06 12:35
=======
# Generated by Django 3.0.5 on 2020-10-08 22:47
>>>>>>> 6e6617b18a610e1e6d6b0f5b162dee78365be452

from django.db import migrations, models
import django.db.models.deletion
import forms.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormsTable',
            fields=[
                ('reference', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('eventType', models.CharField(default='', max_length=70)),
                ('date', models.CharField(default='', max_length=70)),
                ('reporterName', models.CharField(default='', max_length=70)),
                ('reporterUnit', models.CharField(default='', max_length=70)),
                ('editStateBlocked', models.BooleanField(default=False)),
                ('writtenInFormals', models.BooleanField(default=False)),
                ('writtenInDrafts', models.BooleanField(default=False)),
                ('caseIdOnMetzah', models.CharField(default='', max_length=70)),
                ('handlingResults', models.CharField(default='', max_length=70)),
                ('eventStatus', models.CharField(default='', max_length=70)),
                ('handlingStatus', models.CharField(default='', max_length=70)),
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
        migrations.CreateModel(
            name='EventsEquipments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('equipment', models.CharField(default='', max_length=70)),
                ('equipmentType', models.CharField(default='', max_length=70)),
                ('equipmentMark', models.CharField(default='', max_length=70)),
                ('equipmentMakat', models.CharField(default='', max_length=70)),
                ('reference1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='equipments', to='forms.FormsTable')),
            ],
        ),
    ]

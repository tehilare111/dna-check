<<<<<<< HEAD
<<<<<<< HEAD
# Generated by Django 3.1 on 2020-09-06 10:49
=======
# Generated by Django 3.0.6 on 2020-08-30 13:21
>>>>>>> 3afdfef... bar
=======
# Generated by Django 3.0.6 on 2020-09-08 11:36
>>>>>>> a1fc61e... add A new feature of the amount of equipment in one form

import django.contrib.postgres.fields
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
                ('reference', models.IntegerField(blank=True, default=0, primary_key=True, serialize=False)),
                ('eventType', models.CharField(blank=True, default='', max_length=70)),
                ('date', models.CharField(blank=True, default='', max_length=70)),
                ('reporterName', models.CharField(blank=True, default='', max_length=70)),
                ('reporterUnit', models.CharField(blank=True, default='', max_length=70)),
                ('editStateBlocked', models.BooleanField(default=False)),
                ('caseIdOnMetzah', models.CharField(default='', max_length=70)),
                ('handlingResults', models.CharField(default='', max_length=70)),
                ('eventStatus', models.CharField(default='', max_length=70)),
                ('handlingStatus', models.CharField(default='', max_length=70)),
                ('messages', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=150, null=True), blank=True, null=True, size=100)),
<<<<<<< HEAD
<<<<<<< HEAD
                ('equipment', models.CharField(default='', max_length=70)),
                ('equipmentType', models.CharField(default='', max_length=70)),
                ('equipmentMark', models.CharField(default='', max_length=70)),
                ('equipmentMakat', models.CharField(default='', max_length=70)),
=======
>>>>>>> 3afdfef... bar
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
=======
                ('signerUnit', models.CharField(blank=True, max_length=70)),
                ('signerName', models.CharField(blank=True, default='', max_length=70)),
                ('signerId', models.CharField(blank=True, default='', max_length=70)),
                ('rank', models.CharField(blank=True, default='', max_length=70)),
                ('position', models.CharField(blank=True, default='', max_length=70)),
                ('eventDate', models.CharField(blank=True, default='', max_length=70)),
                ('eventHour', models.CharField(blank=True, default='', max_length=70)),
                ('eventRelevantPlacesAndFactors', models.CharField(blank=True, default='', max_length=70)),
                ('eventInitialDetails', models.CharField(blank=True, default='', max_length=70)),
                ('investigationDate', models.CharField(blank=True, default='', max_length=70)),
>>>>>>> a1fc61e... add A new feature of the amount of equipment in one form
                ('investigationFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('investigationFile'))),
                ('handlingDate', models.CharField(blank=True, default='', max_length=70)),
                ('findingDate', models.CharField(blank=True, default='', max_length=70)),
                ('findingFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('findingFile'))),
                ('handlingFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('handlingFile'))),
                ('reviewFile', models.FileField(blank=True, null=True, upload_to=forms.models.UploadTo('reviewFile'))),
                ('reviewDate', models.CharField(blank=True, default='', max_length=70)),
                ('reviewReference', models.CharField(blank=True, default='', max_length=70)),
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
                ('equipment', models.CharField(default='', max_length=70, null=True)),
                ('equipmentType', models.CharField(default='', max_length=70, null=True)),
                ('equipmentMark', models.CharField(default='', max_length=70, null=True)),
                ('equipmentMakat', models.CharField(default='', max_length=70, null=True)),
                ('reference1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='forms.FormsTable')),
            ],
        ),
    ]

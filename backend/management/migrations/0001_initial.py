<<<<<<< HEAD
# Generated by Django 3.0.6 on 2020-10-06 07:25
=======
# Generated by Django 3.0.5 on 2020-10-08 17:17
>>>>>>> 6e6617b18a610e1e6d6b0f5b162dee78365be452

import django.contrib.postgres.fields
import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ConstantsFields',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('constantFieldId', models.CharField(blank=True, max_length=20)),
                ('equipmentType', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), blank=True, null=True, size=None)),
                ('materialType', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=20), blank=True, null=True, size=None)),
                ('equipmentMakat', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=20), blank=True, null=True, size=None)),
                ('eventStatus', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=20), blank=True, null=True, size=None)),
                ('rank', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=20), blank=True, null=True, size=None)),
                ('handlingStatus', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=20), blank=True, null=True, size=None)),
            ],
        ),
        migrations.CreateModel(
            name='UnitsTree',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('unitTreeId', models.IntegerField(default=0)),
                ('maxTreeNodeId', models.IntegerField(default=0)),
                ('treeNode', django.contrib.postgres.fields.jsonb.JSONField()),
            ],
        ),
    ]

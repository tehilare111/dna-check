# Generated by Django 3.1 on 2020-10-20 21:58

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Msgs',
            fields=[
                ('reference', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('reporterUnit', models.CharField(default='', max_length=70)),
                ('messages', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=150, null=True), blank=True, default=list, null=True, size=100)),
            ],
        ),
    ]

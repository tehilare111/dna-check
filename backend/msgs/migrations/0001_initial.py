# Generated by Django 3.1 on 2020-09-12 05:16

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
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reference', models.IntegerField(default=0)),
                ('messages', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=150, null=True), blank=True, null=True, size=100)),
            ],
        ),
    ]
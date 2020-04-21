# Generated by Django 3.1 on 2020-04-19 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0002_auto_20200405_1859'),
    ]

    operations = [
        migrations.AddField(
            model_name='lostform',
            name='findingDate',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='lostform',
            name='findingFile',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='lostform',
            name='handlingDate',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='lostform',
            name='handlingFile',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='lostform',
            name='investigationDate',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='lostform',
            name='investigationFile',
            field=models.CharField(default='', max_length=70),
        ),
        migrations.AddField(
            model_name='lostform',
            name='messages',
            field=models.CharField(default='', max_length=70),
        ),
    ]
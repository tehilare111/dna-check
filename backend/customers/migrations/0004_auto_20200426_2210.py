# Generated by Django 3.1 on 2020-04-26 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0003_auto_20200419_2150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lostform',
            name='investigationFile',
            field=models.FileField(max_length=1000, upload_to=None),
        ),
    ]

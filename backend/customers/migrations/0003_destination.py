# Generated by Django 3.0.5 on 2020-05-03 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0002_auto_20200405_1859'),
    ]

    operations = [
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='', max_length=70)),
                ('firstname', models.CharField(default='', max_length=70)),
                ('lastname', models.CharField(default='', max_length=70)),
                ('password', models.CharField(default='', max_length=70)),
                ('personalnumber', models.CharField(default='', max_length=70)),
                ('rank', models.CharField(default='', max_length=70)),
                ('armyposistion', models.CharField(default='', max_length=70)),
                ('premission',models.CharField(default=' ',max_length=70)),
                ('armyunit',models.CharField(default='',max_length=70)),
                
            ],
        ),
    ]
# Generated by Django 3.0.6 on 2020-06-16 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(default='', max_length=70)),
                ('firstname', models.CharField(default='', max_length=70)),
                ('lastname', models.CharField(default='', max_length=70)),
                ('password', models.CharField(default='', max_length=70)),
                ('personalnumber', models.CharField(default='', max_length=70)),
                ('rank', models.CharField(default='', max_length=70)),
                ('armyposistion', models.CharField(default='', max_length=70)),
                ('permissions', models.CharField(default='', max_length=70)),
                ('armyunit', models.CharField(default=' ', max_length=70)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

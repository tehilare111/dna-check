from users.models import Destination
from rest_framework import serializers 

class DestinationSerilazers(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields=('username',
            'firstname',
            'lastname',
            'password',
            'personalnumber',
            'rank',
            'armyposistion',
            'permissions',
            'armyunit',)
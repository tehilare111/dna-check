from users.models import Users
from rest_framework import serializers 

class UsersSerilazers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields=('username',
            'firstname',
            'lastname',
            'password',
            'personalnumber',
            'rank',
            'armyposistion',
            'permissions',
            'armyunit',)
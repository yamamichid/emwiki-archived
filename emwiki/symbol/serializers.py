from .models import Symbol
from rest_framework import serializers


class SymbolSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Symbol
        fields = ['name', 'filename', ]

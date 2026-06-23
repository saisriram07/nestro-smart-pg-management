from rest_framework import serializers
from .models import Property, Building, Room, Bed


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"


class BuildingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Building
        fields = "__all__"


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"


class BedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bed
        fields = "__all__"
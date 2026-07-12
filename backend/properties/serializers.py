from rest_framework import serializers
from .models import Property, Building, Room, Bed


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"


class BuildingSerializer(serializers.ModelSerializer):

    property_name = serializers.CharField(
        source="property.property_name",
        read_only=True
    )

    class Meta:
        model = Building
        fields = [
            "id",
            "property",
            "property_name",
            "building_name",
        ]


class RoomSerializer(serializers.ModelSerializer):

    building_name = serializers.CharField(
        source="building.building_name",
        read_only=True
    )

    class Meta:
        model = Room
        fields = [
            "id",
            "building",
            "building_name",
            "room_number",
            "capacity",
        ]


class BedSerializer(serializers.ModelSerializer):

    room_name = serializers.CharField(
        source="room.room_number",
        read_only=True
    )

    class Meta:
        model = Bed
        fields = [
            "id",
            "room",
            "room_name",
            "bed_number",
            "is_occupied",
        ]
from django.contrib import admin
from .models import Property, Building, Room, Bed


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("id", "property_name", "city")
    search_fields = ("property_name", "city")


@admin.register(Building)
class BuildingAdmin(admin.ModelAdmin):
    list_display = ("id", "building_name", "property")


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ("id", "room_number", "building", "capacity")


@admin.register(Bed)
class BedAdmin(admin.ModelAdmin):
    list_display = ("id", "bed_number", "room", "is_occupied")
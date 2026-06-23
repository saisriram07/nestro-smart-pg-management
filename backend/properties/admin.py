from django.contrib import admin
from .models import Property, Building, Room, Bed


@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("id", "property_name", "city")
    search_fields = ("property_name", "city")


@admin.register(Building)
class BuildingAdmin(admin.ModelAdmin):
    list_display = ("id", "building_name", "property")
    search_fields = ("building_name",)
    list_filter = ("property",)


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ("id", "room_number", "building", "capacity")
    search_fields = ("room_number",)
    list_filter = ("building",)


@admin.register(Bed)
class BedAdmin(admin.ModelAdmin):
    list_display = ("id", "bed_number", "room", "is_occupied")
    search_fields = ("bed_number",)
    list_filter = ("is_occupied", "room")
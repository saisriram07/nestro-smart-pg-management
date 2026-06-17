from django.contrib import admin
from .models import Property, Building, Room, Bed

admin.site.register(Property)
admin.site.register(Building)
admin.site.register(Room)
admin.site.register(Bed)
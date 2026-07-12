from django.db import models


class Property(models.Model):
    property_name = models.CharField(max_length=100)
    address = models.TextField()
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.property_name


class Building(models.Model):
    property = models.ForeignKey(
        Property,
        on_delete=models.CASCADE
    )

    building_name = models.CharField(max_length=100)

    def __str__(self):
        return self.building_name


class Room(models.Model):
    building = models.ForeignKey(
        Building,
        on_delete=models.CASCADE
    )

    room_number = models.CharField(max_length=20)
    capacity = models.IntegerField()

    def __str__(self):
        return self.room_number


class Bed(models.Model):
    room = models.ForeignKey(
        Room,
        on_delete=models.CASCADE
    )

    bed_number = models.CharField(max_length=20)

    is_occupied = models.BooleanField(
        default=False
    )

    def __str__(self):
        return self.bed_number
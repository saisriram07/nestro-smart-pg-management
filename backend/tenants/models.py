from django.db import models
from properties.models import Bed


class Tenant(models.Model):
    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=15)

    email = models.EmailField()

    bed = models.OneToOneField(
        Bed,
        on_delete=models.SET_NULL,
        null=True
    )

    check_in_date = models.DateField()

    rent_amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    def __str__(self):
        return self.name
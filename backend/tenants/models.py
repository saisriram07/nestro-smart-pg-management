from django.db import models
from properties.models import Bed


class Tenant(models.Model):
    full_name = models.CharField(max_length=100)

    phone_number = models.CharField(max_length=15)

    aadhaar_number = models.CharField(max_length=20, unique=True)

    email = models.EmailField()

    joining_date = models.DateField()

    monthly_rent = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    security_deposit = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    bed = models.OneToOneField(
        Bed,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.full_name
from django.db import models
from tenants.models import Tenant


class Payment(models.Model):

    PAYMENT_STATUS = (
        ("Paid", "Paid"),
        ("Pending", "Pending"),
        ("Overdue", "Overdue"),
    )

    tenant = models.ForeignKey(
        Tenant,
        on_delete=models.CASCADE
    )

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    payment_date = models.DateField()

    payment_month = models.CharField(
        max_length=20
    )

    payment_status = models.CharField(
        max_length=20,
        choices=PAYMENT_STATUS,
        default="Pending"
    )

    remarks = models.TextField(
        blank=True,
        null=True
    )

    def __str__(self):
        return f"{self.tenant.full_name} - {self.payment_month}"
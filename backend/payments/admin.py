from django.contrib import admin
from .models import Payment


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "tenant",
        "amount",
        "payment_month",
        "payment_status",
    )

    list_filter = (
        "payment_status",
        "payment_month",
    )

    search_fields = (
        "tenant__full_name",
    )
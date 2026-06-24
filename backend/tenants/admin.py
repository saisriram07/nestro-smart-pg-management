from django.contrib import admin
from .models import Tenant


@admin.register(Tenant)
class TenantAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "full_name",
        "phone_number",
        "monthly_rent",
        "bed",
    )

    search_fields = (
        "full_name",
        "phone_number",
    )

    list_filter = (
        "joining_date",
    )
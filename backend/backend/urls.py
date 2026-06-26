from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/", include("properties.urls")),

    path("api/tenants/", include("tenants.urls")),

    path("api/payments/", include("payments.urls")),

    path(
    "api/dashboard/",
    include("dashboard.urls")),

    path(
        'admin/',
        admin.site.urls
    ),

    path(
        'api/properties/',
        include('properties.urls')
    ),

    path(
        'api/tenants/',
        include('tenants.urls')
    ),

    path(
        'api/payments/',
        include('payments.urls')
    ),

    path(
        'api/dashboard/',
        include('dashboard.urls')
    ),
]
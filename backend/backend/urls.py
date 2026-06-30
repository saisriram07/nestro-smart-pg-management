from django.contrib import admin
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [

    # Admin
    path("admin/", admin.site.urls),

    # JWT Authentication
    path(
        "api/token/",
        TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),

    path(
        "api/token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),

    # Project APIs
    path(
        "api/",
        include("properties.urls"),
    ),

    path(
        "api/tenants/",
        include("tenants.urls"),
    ),

    path(
        "api/payments/",
        include("payments.urls"),
    ),

    path(
        "api/dashboard/",
        include("dashboard.urls"),
    ),
]
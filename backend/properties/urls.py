from django.urls import path
from .views import (
    PropertyListCreateView,
    PropertyDetailView,
    BuildingListCreateView,
    BuildingDetailView,
    RoomListCreateView,
    RoomDetailView,
)

urlpatterns = [
    path("properties/", PropertyListCreateView.as_view()),
    path("properties/<int:pk>/", PropertyDetailView.as_view()),

    path("buildings/", BuildingListCreateView.as_view()),
    path("buildings/<int:pk>/", BuildingDetailView.as_view()),

    path("rooms/", RoomListCreateView.as_view()),
    path("rooms/<int:pk>/", RoomDetailView.as_view()),
]
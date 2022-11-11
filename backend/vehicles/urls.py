from django.urls import path

from .views import ListCreateVehicleView, DetailedVehicleView

urlpatterns = [
    path("vehicles/", ListCreateVehicleView.as_view()), #Get All Vehicles / Register One
    path("vehicles/<pk>/", DetailedVehicleView.as_view()), #Get/Edit/Delete Vehicle by ID
]

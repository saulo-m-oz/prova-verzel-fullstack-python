from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .serializers import VehicleSerializer
from .permissions import VehiclePermission
from .models import Vehicle

import ipdb

class ListCreateVehicleView(ListCreateAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer
    
    permission_classes = [VehiclePermission]

    def get_queryset(self):
        route_parameter = self.request.GET.get("price")
        if route_parameter == "descending":
            queryset = Vehicle.objects.all().order_by("-price")
            return queryset

        queryset = Vehicle.objects.all().order_by("price")
        return queryset

class DetailedVehicleView(RetrieveUpdateDestroyAPIView):
    queryset = Vehicle.objects.all()
    serializer_class = VehicleSerializer

    permission_classes = [VehiclePermission]

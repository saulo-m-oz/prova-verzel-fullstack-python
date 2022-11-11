from rest_framework.serializers import ModelSerializer


from .models import Vehicle

class VehicleSerializer(ModelSerializer):
    class Meta:
        model = Vehicle
        fields = [
            "id",
            "model",
            "brand",
            "color",
            "price",
            "condition",
            "city",
            "plate",
            "photo",
        ]

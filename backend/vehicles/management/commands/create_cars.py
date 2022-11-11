from vehicles.models import Vehicle
from django.core.management.base import BaseCommand
from django.utils.crypto import get_random_string
import random


class Command(BaseCommand):
    help = "Create random vehicles"

    def handle(self, *args, **kwargs):
        cars = [
            {
                "model": "X2",
                "brand": "BMW",
                "photo": "https://images.kavak.services/images/153850/EXTERIOR-frontSidePilotNear-1650417906370.jpeg?d=540x310",
            },
            {
                "model": "PRIMA",
                "brand": "CHEVROLET",
                "photo": "https://images.kavak.services/images/210007/EXTERIOR-frontSidePilotNear-1667939714496.jpeg?d=540x310",
            },
            {
                "model": "JETTA",
                "brand": "VOLKSWAGEN",
                "photo": "https://images.kavak.services/images/155616/EXTERIOR-frontSidePilotNear-1640871038767.jpeg?d=540x310",
            },
            {
                "model": "COROLLA",
                "brand": "TOYOTA",
                "photo": "https://images.kavak.services/images/154661/EXTERIOR-frontSidePilotNear-1642827837042.jpeg?d=540x310",
            },
            {
                "model": "COMPASS",
                "brand": "JEEP",
                "photo": "https://images.kavak.services/images/152942/EXTERIOR-frontSidePilotNear-1642657661797.jpeg?d=540x310",
            },
            {
                "model": "GLC 250",
                "brand": "MERCEDES BENZ",
                "photo": "https://images.kavak.services/images/154710/EXTERIOR-frontSidePilotNear-1641300837901.jpeg?d=540x310",
            },
        ]

        for i in range(50):
            index = random.randrange(6)
            Vehicle.objects.create(
                model=cars[index]["model"],
                brand=cars[index]["brand"],
                condition="New",
                color="Red",
                city="Sao Paulo",
                photo=cars[index]["photo"],
                plate=get_random_string(7),
                price=random.uniform(50000.00, 100000.00),
            )

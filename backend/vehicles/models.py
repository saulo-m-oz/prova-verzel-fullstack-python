from django.db import models
from django.core.validators import MinLengthValidator

import uuid

class ConditionChoices(models.TextChoices):
    NEW = "New"
    USED = "Used"
    DEFAULT = "Not specified"


class Vehicle(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    model = models.CharField(max_length=60)
    brand = models.CharField(max_length=60)
    color = models.CharField(max_length=15)
    city = models.CharField(max_length=60)
    condition = models.CharField(max_length=13, choices=ConditionChoices.choices)
    plate = models.CharField(max_length=7, unique=True, validators=[MinLengthValidator(limit_value=7)])
    photo = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=8, decimal_places=2)

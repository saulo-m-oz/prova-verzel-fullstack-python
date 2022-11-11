from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import User
from .serializers import RegisterUserSerializer, CustomJWTSerializer

class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterUserSerializer

class LoginJWTView(TokenObtainPairView):
    serializer_class = CustomJWTSerializer

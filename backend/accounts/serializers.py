from rest_framework.serializers import ModelSerializer

from .models import User

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class RegisterUserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "name"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class RegisterAdminSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password", "name"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        return User.objects.create_superuser(**validated_data)

class CustomJWTSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["is_superuser"] = user.is_superuser
        token["is_staff"] = user.is_staff

        return token

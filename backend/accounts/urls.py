from django.urls import path
from .views import RegisterUserView, LoginJWTView

urlpatterns = [
    path("register/", RegisterUserView.as_view()),
    path("login/", LoginJWTView.as_view()),
]

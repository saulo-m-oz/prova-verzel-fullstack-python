from accounts.models import User
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Create admin user"

    def handle(self, *args, **kwargs):
        User.objects.create_superuser(email="admin@admin.com", password="admin")

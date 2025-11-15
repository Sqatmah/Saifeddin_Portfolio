import os
from django.contrib.auth import get_user_model
from django.core.management import execute_from_command_line

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio_site.settings")

def create_superuser():
    User = get_user_model()
    username = "admin"
    email = "admin@example.com"
    password = "Admin12345!"

    if not User.objects.filter(username=username).exists():
        print("Creating superuser...")
        User.objects.create_superuser(username=username, email=email, password=password)
    else:
        print("Superuser already exists.")

if __name__ == "__main__":
    create_superuser()

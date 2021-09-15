from django.db import models


class User(models.Model):
    user_name = models.CharField(max_length=16, unique=True)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=16)

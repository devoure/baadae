from django.db import models
from django.conf import settings

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='users/%Y/%m/%d/', blank=True)
    location = models.CharField(max_length=50)
    bio = models.CharField(max_length=200)
    banner = models.ImageField(upload_to='users/banner/', blank=True)

    def __str__(self):
        return f'Profile for { self.user.username }'

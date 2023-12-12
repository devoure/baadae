from django.db import models
from django.conf import settings
from django.utils.text import slugify

# Create your models here.


class Bookmark(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             related_name='bookmarks',
                             on_delete=models.CASCADE)
    users_like = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                        related_name='images_liked',
                                        blank=True)
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True)
    slug = models.SlugField(max_length=200,
                            blank=True)
    image = models.ImageField(upload_to='images/%Y/%m/%d')
    desc = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True,
                                   db_index=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

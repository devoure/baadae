from rest_framework import serializers
# from django.contrib.auth.models import User
from bookmarks.models import Bookmark


class BookmarkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = '__all__'

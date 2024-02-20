from rest_framework import serializers
# from django.contrib.auth.models import User
from bookmarks.models import Bookmark
from django.contrib.auth.models import User
from accounts.models import Profile


class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['photo']


class UserSerializers(serializers.ModelSerializer):
    profile = ProfileSerializers(many=False)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'profile')


class BookmarkSerializers(serializers.ModelSerializer):
    user = UserSerializers(many=False)

    class Meta:
        model = Bookmark
        fields = "__all__"


class AddBookmarkSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = "__all__"

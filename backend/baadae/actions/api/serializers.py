from rest_framework import serializers
from actions.models import Action
from django.contrib.auth.models import User
from accounts.models import Profile
from bookmarks.models import Bookmark


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name')


class ActionObjectRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        if isinstance(value, Bookmark):
            return ({"user": "{} {}".format(value.user.first_name, value.user.last_name),
                     "photo": value.user.profile.photo.url,
                     "bookmark": value.image.url,
                     "desc": value.desc,
                     "title": value.title,
                     "likes": value.users_like.count()})
        raise Exception('Unexpected type of tagged object')


class ActionSerializers(serializers.ModelSerializer):
    user = UserSerializers(many=False)
    target = ActionObjectRelatedField(read_only=True)

    class Meta:
        model = Action
        fields = '__all__'

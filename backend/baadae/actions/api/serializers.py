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
            return value.image.url
        raise Exception('Unexpected type of tagged object')


class ActionSerializers(serializers.ModelSerializer):
    user = UserSerializers(many=False)
    target = ActionObjectRelatedField(read_only=True)

    class Meta:
        model = Action
        fields = '__all__'

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializers
from .serializers import ProfileSerializers
from .serializers import ProfileUpdateSerializers
from .serializers import UserUpdateSerializers
from .serializers import UsersSerializers

from accounts.models import Profile
from django.contrib.auth.models import User
from bookmarks.models import Bookmark
from accounts.models import Contact


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view((['POST']))
def add_user(request):
    new_user = UserSerializers(data=request.data)
    if new_user.is_valid():
        new_user.save()
        return Response("OK")
    return Response("ERROR") 


@api_view(['GET'])
def get_profiles(request):
    profiles = Profile.objects.all()
    result = ProfileSerializers(profiles, many=True)
    return Response(result.data)


@api_view(['GET'])
def get_profile(request, pk):
    user = User.objects.get(id=pk)
    profile = Profile.objects.get(user=user)
    result = ProfileSerializers(profile, many=False)
    return Response(result.data)


@api_view(['GET'])
def get_user(request, pk):
    user = User.objects.get(id=pk)
    result = UserUpdateSerializers(user, many=False)
    return Response(result.data)


@api_view(['POST'])
def update_profile(request, pk):
    user = User.objects.get(id=pk)
    profile = Profile.objects.get(user=user)
    updated_profile = ProfileUpdateSerializers(instance=profile,
                                               data=request.data,
                                               partial=True)
    updated_user = UserUpdateSerializers(instance=user,
                                         data=request.data,
                                         partial=True)

    res = "ERROR"
    if updated_profile.is_valid():
        updated_profile.save()
        res = "SUCCESS"

    if updated_user.is_valid():
        updated_user.save()
        res = "ALL_SUCCESS"

    return Response(res)


@api_view(['GET'])
def get_baadae_users(request):
    users = User.objects.filter(is_active=True).filter(is_superuser=False)
    res = UsersSerializers(users, many=True)
    myres = []
    for a in res.data:
        person_data = {}
        profile = Profile.objects.get(user=a['id'])
        person_data['user'] = a
        person_data['profile'] = ProfileSerializers(profile).data
        bookmarks_count = Bookmark.objects.all().filter(user=a['id']).count()
        person_data['bookmarks_count'] = bookmarks_count
        myres.append(person_data)
    return Response(myres)


@api_view(['POST'])
def follow(request, pk):
    # User1 folllows user2
    user1 = User.objects.get(id=pk)
    user2 = User.objects.get(id=request.data["user"])

    # Check if user follows the user
    follower = Contact.objects.filter(user_from=user1, user_to=user2).count()
    res = None

    if follower == 0:
        Contact.objects.get_or_create(user_from=user1, user_to=user2)
        res = "{} just followed {}".format(user1.username, user2.username)
    else:
        Contact.objects.filter(user_from=request.user1, user_to=user2).delete()
        res = "{} just unfollowed {}".format(user1.username, user2.username)
    return Response(res)

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
        myres.append(person_data)
    return Response(myres)

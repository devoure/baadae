from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import status

from .serializers import BookmarkSerializers

from django.contrib.auth.models import User
from bookmarks.models import Bookmark


@api_view((['POST']))
def add_bookmark(request, pk):
    # user = User.objects.get(id=pk)
    request.data["user"] = pk
    new_bookmark = BookmarkSerializers(data=request.data)
    if new_bookmark.is_valid():
        new_bookmark.save()
        return Response("OK")
    # print(">>>", new_bookmark.errors)
    return Response("ERROR")


@api_view((['GET']))
def get_bookmarks(request, pk):
    # user = User.objects.get(id=pk)
    bookmarks = Bookmark.objects.all().filter(user=pk)
    res = BookmarkSerializers(bookmarks, many=True)
    return Response(res.data)

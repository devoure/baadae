from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework import status

from .serializers import AddBookmarkSerializers
from .serializers import BookmarkSerializers

from django.contrib.auth.models import User
from bookmarks.models import Bookmark
from actions.utils import create_action
import redis


@api_view((['POST']))
def add_bookmark(request, pk):
    user = User.objects.get(id=pk)
    request.data["user"] = pk
    new_bookmark = AddBookmarkSerializers(data=request.data)
    if new_bookmark.is_valid():
        target = new_bookmark.save()
        create_action(user, 'bookmarked', target)
        return Response("OK")
    print(">>>", new_bookmark.errors)
    return Response("ERROR")


@api_view((['GET']))
def get_bookmarks(request):
    # user = User.objects.get(id=pk)
    bookmarks = Bookmark.objects.all()
    res = BookmarkSerializers(bookmarks, many=True)
    return Response(res.data)


@api_view((['GET']))
def get_user_bookmarks(request, pk):
    # user = User.objects.get(id=pk)
    bookmarks = Bookmark.objects.all().filter(user=pk)
    res = BookmarkSerializers(bookmarks, many=True)
    return Response(res.data)


@api_view((['POST']))
def like_bookmark(request, pk):
    user = User.objects.get(id=request.data["user"])
    bookmark = Bookmark.objects.get(id=pk)
    res = None
    likes = Bookmark.objects.filter(id=pk).filter(users_like__in=[user]).count()
    if likes == 0:
        bookmark.users_like.add(user)
        create_action(user, 'likes', bookmark)
    else:
        bookmark.users_like.remove(user)
    res = BookmarkSerializers(bookmark, many=False)
    return Response(res.data)


from django.urls import path
from . import views

urlpatterns = [
        path('add/<str:pk>/', views.add_bookmark, name="add-bookmark"),
        path('get/<str:pk>/', views.get_bookmarks, name="get-bookmarks")
        ]

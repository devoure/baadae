from django.urls import path
from . import views

urlpatterns = [
        path('feeds/<str:pk>/', views.get_actions, name="get-feeds"),
        ]

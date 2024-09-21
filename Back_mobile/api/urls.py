from .views import DestinationViewSet ,UserViewSet
from django.urls import path,include
from rest_framework import routers


router = routers.DefaultRouter()
router.register("destintion",DestinationViewSet)
router.register("user",UserViewSet)

urlpatterns = [
    path("",include(router.urls))
]

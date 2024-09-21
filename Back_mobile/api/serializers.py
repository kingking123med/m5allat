from dataclasses import fields
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from .models import Destinations,Users,reviews
from .serializers import Destinations
from .serializers import Users
from .serializers import reviews
 
class DestinationSerializer(ModelSerializer):
    class Meta:
        model=Destinations
        fields ='__all__'
        
class UserSerializer(ModelSerializer):
    class Meta:
        model=Users
        fields ='__all__'
        
class reviewsSerializer(ModelSerializer):
    class Meta:
        model=reviews
        fields ='__all__'
        
        
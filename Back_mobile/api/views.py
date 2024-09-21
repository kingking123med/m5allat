from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from.serializers import DestinationSerializer,UserSerializer
from rest_framework import viewsets
from .models import Destinations,Users
import json
from django.contrib.auth import authenticate ,login
from rest_framework.authtoken.models import Token
class DestinationViewSet(viewsets.ModelViewSet):
    serializer_class=DestinationSerializer
    queryset =Destinations.objects.all()
    
    @action(detail=False ,methods=['GET'],url_path=r'get_categorie',)
    def get_categorie(self,request):
        destinations=Destinations.objects.filter(category=request.query_params.get("categorie"))
        desseriadlizer=DestinationSerializer(destinations,many=True)
        return Response(desseriadlizer.data,status=status.HTTP_200_OK)
    
    @action(detail=False ,methods=['GET'],url_path=r'get_nom',)
    def get_nom(self,request):
        destinations=Destinations.objects.filter(name=request.query_params.get("nom"))
        desseriadlizer=DestinationSerializer(destinations,many=True)
        return Response(desseriadlizer.data,status=status.HTTP_200_OK)
    
class UserViewSet(viewsets.ModelViewSet):
    serializer_class =UserSerializer
    queryset=Users.objects.all()
    
    @action(detail=False ,methods=['POST'],url_path=r'verif_user',)
    
    def verif_user(self,request):
        print(request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        new_user = User()
        new_user.email = body["email"]
        new_user.password = body["password"]
        new_user.username = body["name"]
        new_user.save()  # Save the user object first

        new_profile = Users()
        new_profile.city = body["city"]
        new_profile.username = body["name"]
        new_profile.user = new_user  # Associate the new user object with the user object
        new_profile.save()  # Now save the new user object

        token = Token.objects.create(user=new_user)
        token.save()

        return Response( status=status.HTTP_200_OK)

    @action(detail=False ,methods=['POST'],url_path=r'verif_user_login',)
    def verif_user_login(self,request):
        
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        print(username)
        print(password)
        try:
            user= User.objects.get(username=username,password=password)
            
        except User.DoesNotExist:
            user=None
        print(user)
        if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                print(token)
                return Response({
                    'token': token.key,
                    'user_id': user.pk,
                    'name': user.username,
                    'email': user.email
                })   
        else :
                return Response( None)
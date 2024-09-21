from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
# Create your models here.

open_close =(('open','OPEN'),('close','CLOSE'))

class Destinations(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    date = models.DateField()
    class Category_choices(models.TextChoices):
        RESTAURENT="RESTO",("Restaurent")
        CAFEE="CAFE",("cafee")
    category = models.CharField(max_length=10,choices=Category_choices.choices)
    stars = models.FloatField()
    status = models.CharField(max_length=10,choices=open_close,default='open')

     

    
class Users(models.Model):
    username = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    user=models.OneToOneField(User,on_delete=models.CASCADE)
     

     
    

status_choice = (('approved','APPROVED'),('pending','PENDING'),('rejected'),('REJECTED'))

class reviews(models.Model):
    status = models.CharField(max_length=10,  default='pending')
    users = models.ForeignKey(Users, on_delete=models.CASCADE)
    destinations = models.ForeignKey(Destinations, on_delete=models.CASCADE)
    stars = models.IntegerField()
    comment = models.TextField()
    date = models.DateTimeField()

     
    def init(self, args, **kwargs):
        super().init(args,**kwargs)
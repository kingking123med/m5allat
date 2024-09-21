from django.contrib import admin

# Register your models here.

from .models import Destinations,Users,reviews

admin.site.register(Destinations)
admin.site.register(Users)
admin.site.register(reviews)
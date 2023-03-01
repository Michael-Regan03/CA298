from django.urls import path
from .views import *
#from views.py import *

urlpatterns = [
    path('', index, name="index"),
    path('pizzaCreator', pizzaCreator , name='pizzaCreator'),
    path('delivery/<int:pizza_id>', delivery , name='delivery'),
    path('confirmation/<int:delivery_id>', confirmation , name='confirmation'),
]
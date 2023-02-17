from django.urls import path
from .views import *
#from views.py import *

urlpatterns = [
    path('', index, name="index"),
    path('books', view_all_books , name='all_books'),
    path('books/<int:ID>', view_single_book, name='single_book'),
    path('books/<str:Genre>', view_Genre, name='Genre'),
    path('books/<str:Genre>/<str:ReleaseYear>', view_Genre_and_ReleaseDate, name='Genre_and_ReleaseDate'),
     path('Customer/<int:ID>', view_Customer , name='Customer'),
]
from django.urls import path
from .views import *
#from views.py import *

urlpatterns = [
    path('', index, name="index"),
    path('contact/', contact, name="contact"),
    path('books', view_all_books , name='all_books'),
    path('books/<int:id>', view_single_book, name='single_book'),
    path('books/<str:category>', view_category, name='category'),
    path('books/<str:category>/<str:year>', view_category_and_date, name='category_and_date'),
]
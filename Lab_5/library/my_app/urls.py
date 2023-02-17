from django.urls import path,include
from rest_framework import routers
from .views import *
#from views.py import *


router = routers.DefaultRouter()
router.register('customer', CustomerViewSet)
router.register('book', BookViewSet)
router.register('borrowed', BorrowedViewSet)


urlpatterns = [
    path('', index, name="index"),
    path('books', view_all_books , name='all_books'),
    path('books/<int:ID>', view_single_book, name='single_book'),
    path('books/<str:Genre>', view_Genre, name='Genre'),
    path('books/<str:Genre>/<str:ReleaseYear>', view_Genre_and_ReleaseDate, name='Genre_and_ReleaseDate'),
    path('Customer/<int:ID>', view_Customer , name='Customer'),
    
    
    path('add', api_add, name='api_add'),
    path('subtract', api_subtract, name='api_subtract'),
    path('multiply', api_multiply, name='api_multiply'),
    path('divide', api_divide, name='api_divide'),

    path('api', include(router.urls)),
]
# serializers.py created inside your app folder
from rest_framework import serializers
from .models import *

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Customers
		fields = ['ID','Name']

class BookSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Book
		fields = ['ID','Title','Author', 'Genre', 'ReleaseYear', 'NumberInInventory']

class BorrowedSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Borrowed
		fields = ['CustomerID','BookID', 'Returned']


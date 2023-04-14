from django.db import models

class Book(models.Model):
    ID = models.AutoField(primary_key=True)
    
    Title = models.CharField(max_length=50)
    Author = models.CharField(max_length=50) 
    Genre = models.CharField(max_length=50, default="Horror")
    ReleaseYear = models.DecimalField(max_digits=4, decimal_places=0,default="2022")
    NumberInInventory = models.DecimalField(max_digits=3,decimal_places=0,default="0")

class Customers(models.Model):
    ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=300)

class Borrowed(models.Model):
    CustomerID = models.CharField(max_length=100)
    BookID = models.CharField(max_length=100)
    Returned = models.BooleanField(default=False)
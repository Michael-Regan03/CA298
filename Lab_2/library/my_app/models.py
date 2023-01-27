from django.db import models

class MyModel(models.Model):
    id = models.AutoField(primary_key=True)
    year = models.DateField()
    author = models.CharField(max_length=50)
    price = models.IntegerField()
    title = models.CharField(max_length=50)
    synopsis = models.CharField(max_length=500)
    category = models.CharField(max_length=50, default="Horror")

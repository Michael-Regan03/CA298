from django.contrib import admin
from .models import *

admin.site.register(Book)
admin.site.register(Customers)
admin.site.register(Borrowed)


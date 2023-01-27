from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404

def index(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def view_all_books(request):
    all_books = MyModel.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, id):
    single_book = get_object_or_404(MyModel, id=id)
    return render(request, 'single_book.html', {'book':single_book})

def view_category(request, category):
    category_p = MyModel.objects.filter(category=category) 
    return render(request, 'category.html', {'books':category_p})

def view_category_and_date(request, category, year):
    category_pd = MyModel.objects.filter(category=category, year=year) 
    return render(request, 'category.html', {'books':category_pd})

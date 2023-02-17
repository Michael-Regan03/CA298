from django.http import HttpResponse
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404

def index(request):
    return render(request, 'index.html')

def view_all_books(request):
    all_books = Book.objects.all()
    return render(request, 'all_books.html', {'books':all_books})

def view_single_book(request, ID):
    single_book = get_object_or_404(Book, ID=ID)
    borrowed = Borrowed.objects.filter(BookID=ID,Returned=False)
    return render(request, 'single_book.html', {'book':single_book, 'borrowed':borrowed})


def view_Genre(request, Genre):
    category = Book.objects.filter(Genre=Genre) 
    return render(request, 'genre.html', {'books':category})

def view_Genre_and_ReleaseDate(request, Genre, ReleaseYear):
    category = Book.objects.filter(Genre=Genre, ReleaseYear=ReleaseYear) 
    return render(request, 'genre.html', {'books':category})

def view_Customer(request, ID):
    customer = Customers.objects.filter(ID=ID)
    returned = Borrowed.objects.filter(CustomerID=ID, Returned=True)
    active = Borrowed.objects.filter(CustomerID=ID, Returned=False)
    return render(request, 'customer.html', {'customer':customer, 'returned':returned, 'active':active})

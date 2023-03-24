from django.http import HttpResponse, JsonResponse 
from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from .models import *
from .serializers import *

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

def api_add(request):
    num1 = float(request.GET.get('num1',1)) 
    num2 = float(request.GET.get('num2',1))
    added = num1 + num2

    resp_dict = {'result':added}
	
    return JsonResponse(resp_dict)

def api_subtract(request):
    num1 = float(request.GET.get('num1',1)) 
    num2 = float(request.GET.get('num2',1))
    added = num1 - num2
    resp_dict = {'result':added}
    return JsonResponse(resp_dict)

def api_multiply(request):
    num1 = float(request.GET.get('num1',1)) 
    num2 = float(request.GET.get('num2',1))
    added = num1 * num2
    resp_dict = {'result':added}
    return JsonResponse(resp_dict)

def api_divide(request):
    num1 = float(request.GET.get('num1',1)) 
    num2 = float(request.GET.get('num2',1))
    added = num1 / num2
    resp_dict = {'result':added}
    return JsonResponse(resp_dict)

class CustomerViewSet(viewsets.ModelViewSet):
	serializer_class = CustomerSerializer
	queryset = Customers.objects.all()

class BookViewSet(viewsets.ModelViewSet):
	serializer_class = BookSerializer
	queryset = Book.objects.all()

class BorrowedViewSet(viewsets.ModelViewSet):
	serializer_class = BorrowedSerializer
	queryset = Borrowed.objects.all()

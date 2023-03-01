from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import *
from django.shortcuts import get_object_or_404
from .forms import *

def index(request):
    return render(request, 'index.html')

def pizzaCreator(request):
    if request.method == "POST":
        form = PizzaCreatorForm(request.POST)
        if form.is_valid():
            pizza = form.save()
            return redirect('delivery', pizza_id=pizza.id)
        else:
            return render(request, 'pizzaCreator.html', {'form': form})
    else:
        form = PizzaCreatorForm()
        return render(request, 'pizzaCreator.html', {'form': form})

def delivery(request, pizza_id):
    pizza = get_object_or_404(Pizza, id=pizza_id)
    if request.method == "POST":
        form = DeliveryForm(request.POST)
        if form.is_valid():
            delivery = form.save(commit=False)
            delivery.pizza = pizza
            delivery.save()
            return redirect('confirmation', delivery_id=delivery.id)
        else:
            return render(request, 'delivery.html', {'form': form})
    else:
        form = DeliveryForm()
        return render(request, 'delivery.html', {'form': form, 'pizza': pizza})

def confirmation(request, delivery_id):
    delivery = Delivery.objects.get(id=delivery_id)
    toppings = Toppings(delivery_id)
    return render(request, 'confirmation.html', {'delivery': delivery, "toppings": toppings})

def Toppings(delivery_id):
    delivery = Delivery.objects.get(id=delivery_id)
    toppings=[]
    if(delivery.pizza.Pepperoni):
        toppings.append("Pepperoni")
    if(delivery.pizza.Chicken):
        toppings.append("Chicken")    
    if(delivery.pizza.Ham):
        toppings.append("Ham")
    if(delivery.pizza.Pineapple):
        toppings.append("Pineapple")
    if(delivery.pizza.Peppers):
        toppings.append("Peppers")
    if(delivery.pizza.Mushrooms):
        toppings.append("Mushrooms")
    if(delivery.pizza.Onions):
        toppings.append("Onions")
    if(len(toppings) == 0):
        toppings.append("No Toppings")
    return toppings
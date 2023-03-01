from django import forms
from .models import *

class PizzaCreatorForm(forms.ModelForm):

    size = forms.ModelChoiceField(queryset=Size.objects.all())
    crust = forms.ModelChoiceField(queryset=Crust.objects.all())
    sauce = forms.ModelChoiceField(queryset=Sauce.objects.all())
    cheese = forms.ModelChoiceField(queryset=Cheese.objects.all())

    Pepperoni = forms.BooleanField(required=False)
    Chicken = forms.BooleanField(required=False)
    Ham = forms.BooleanField(required=False)
    Pineapple = forms.BooleanField(required=False)
    Peppers = forms.BooleanField(required=False)
    Mushrooms = forms.BooleanField(required=False)
    Onions = forms.BooleanField(required=False)

    class Meta:
        model = Pizza
        fields = ['size', 'crust', 'sauce', 'cheese', 'Pepperoni', 'Chicken', 'Ham', 'Pineapple', 'Peppers', 'Mushrooms', 'Onions']

class DeliveryForm(forms.ModelForm):

    name = forms.CharField()
    address = forms.CharField()
    CardNum = forms.DecimalField()
    expiryDate = forms.CharField()
    CVV = forms.DecimalField()

    class Meta:
        model = Delivery
        fields = ['name', 'address', 'CardNum', 'expiryDate', 'CVV']


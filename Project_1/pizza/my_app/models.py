from django.db import models
from django.core.exceptions import ValidationError

class Topping(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='ingredient_images/', null=True, blank=True)


    def __str__(self):
        return self.name

class Size(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.name

class Crust(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.name

class Sauce(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.name

class Cheese(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.name


class Pizza(models.Model):
    id = models.AutoField(primary_key=True)
    
    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    crust = models.ForeignKey(Crust, on_delete=models.CASCADE)
    sauce = models.ForeignKey(Sauce, on_delete=models.CASCADE)
    cheese = models.ForeignKey(Cheese, on_delete=models.CASCADE)

    Pepperoni = models.BooleanField(default=False)
    Chicken = models.BooleanField(default=False)
    Ham = models.BooleanField(default=False) 
    Pineapple = models.BooleanField(default=False)
    Peppers = models.BooleanField(default=False)
    Mushrooms = models.BooleanField(default=False)
    Onions = models.BooleanField(default=False)



#Custom validators

def CardNum_validator(value):
    value_str = str(value)
    if(len(value_str) != 16):
        raise ValidationError(
            '%(value)s must be 16 numbers',
            params={'value': value},
        )

def CVV_validator(value):
    value_str = str(value)
    if(len(value_str) != 3):
        raise ValidationError(
            '%(value)s must be 3 numbers',
            params={'value': value},
        )






def validation_error():
    raise ValidationError(
            'ExpiryDate',
        )



def expiryDate_validator(value):
    if(len(value) == 5):
        try:
            if(int(value[:2]) < 1):
                raise ValidationError(
                    'Month cant be less the one',
                )
            elif(int(value[:2]) > 12):
                raise ValidationError(
                    'Month cant be more then 12',
                ) 
            elif(int(value[3:]) < 23):
                raise ValidationError(
                    'Date would have expired by now if its less then 23',
                ) 
            elif(str(value[2]) != "/"):
                raise ValidationError(
                    'Has the have a / divide'
                )
        except:
             raise ValidationError(
                    'value error'
                )
    else:
        raise ValidationError(
            'not 5 chars long',
        )


class Delivery(models.Model):
    id = models.AutoField(primary_key=True)

    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)

    name = models.CharField(max_length=1000)
    address = models.CharField(max_length=10000)
    CardNum = models.DecimalField(decimal_places=0, max_digits=16,validators=[CardNum_validator])
    expiryDate = models.CharField(max_length=5, validators=[expiryDate_validator])
    CVV = models.DecimalField(decimal_places=0, max_digits=3, validators=[CVV_validator])


# Generated by Django 4.1.5 on 2023-02-28 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0008_cheese_crust_sauce_size_topping_pizza_delivery'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='CVV',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='delivery',
            name='CardNum',
            field=models.IntegerField(),
        ),
    ]
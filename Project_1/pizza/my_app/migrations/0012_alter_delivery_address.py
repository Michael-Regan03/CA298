# Generated by Django 4.1.5 on 2023-02-28 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0011_alter_delivery_cvv_alter_delivery_cardnum'),
    ]

    operations = [
        migrations.AlterField(
            model_name='delivery',
            name='address',
            field=models.CharField(max_length=10000),
        ),
    ]
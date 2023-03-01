# Generated by Django 4.1.5 on 2023-02-28 18:26

from django.db import migrations, models
import my_app.models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0014_alter_delivery_cvv_alter_delivery_cardnum'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Book',
        ),
        migrations.DeleteModel(
            name='Borrowed',
        ),
        migrations.DeleteModel(
            name='Customers',
        ),
        migrations.AlterField(
            model_name='delivery',
            name='CVV',
            field=models.DecimalField(decimal_places=0, max_digits=3, validators=[my_app.models.CVV_validator]),
        ),
        migrations.AlterField(
            model_name='delivery',
            name='CardNum',
            field=models.DecimalField(decimal_places=0, max_digits=16, validators=[my_app.models.CardNum_validator]),
        ),
    ]
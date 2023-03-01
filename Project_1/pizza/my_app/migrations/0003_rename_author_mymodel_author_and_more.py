# Generated by Django 4.1.5 on 2023-02-16 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0002_mymodel_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mymodel',
            old_name='author',
            new_name='Author',
        ),
        migrations.RenameField(
            model_name='mymodel',
            old_name='category',
            new_name='Genre',
        ),
        migrations.RenameField(
            model_name='mymodel',
            old_name='title',
            new_name='Title',
        ),
        migrations.RemoveField(
            model_name='mymodel',
            name='price',
        ),
        migrations.RemoveField(
            model_name='mymodel',
            name='synopsis',
        ),
        migrations.RemoveField(
            model_name='mymodel',
            name='year',
        ),
        migrations.AddField(
            model_name='mymodel',
            name='NumberInInventory',
            field=models.DecimalField(decimal_places=0, default='0', max_digits=3),
        ),
        migrations.AddField(
            model_name='mymodel',
            name='ReleaseYear',
            field=models.DecimalField(decimal_places=0, default='2022', max_digits=4),
        ),
    ]

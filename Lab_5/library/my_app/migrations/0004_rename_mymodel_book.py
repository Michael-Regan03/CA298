# Generated by Django 4.1.5 on 2023-02-16 12:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('my_app', '0003_rename_author_mymodel_author_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='MyModel',
            new_name='Book',
        ),
    ]
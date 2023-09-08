# Generated by Django 4.2.4 on 2023-08-17 07:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_product_date_and_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date_and_time',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 8, 17, 7, 19, 40, 148256)),
        ),
        migrations.AlterField(
            model_name='product',
            name='favorite',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.PositiveIntegerField(),
        ),
    ]

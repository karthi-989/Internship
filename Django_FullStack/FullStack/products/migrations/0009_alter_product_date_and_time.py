# Generated by Django 4.2.4 on 2023-08-17 12:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_alter_product_date_and_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='date_and_time',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 8, 17, 12, 1, 45, 72625)),
        ),
    ]

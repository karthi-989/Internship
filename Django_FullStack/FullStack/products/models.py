from django.db import models

class Product(models.Model):
    product_Id = models.CharField(max_length=10, unique=True)
    product_name = models.CharField(max_length=100)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()
    date_and_time = models.DateField()  # Use DateField instead of DateTimeField
    archived = models.BooleanField(default=False)
    favorite = models.BooleanField(default=True)


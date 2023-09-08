from django.db import models

# Create your models here.

class React(models.Model):
    product_id = models.PositiveIntegerField()
    name = models.CharField(max_length=30)
    price = models.PositiveIntegerField(null=True)
    quantity = models.PositiveIntegerField(default=0)
    Total=models.PositiveIntegerField(default=0)
    Description=models.CharField(max_length=500 ,null=True,blank=True )

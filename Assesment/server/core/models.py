from django.db import models


# Create your models here.
class Food(models.Model):
    Name = models.CharField(max_length=30)
    Decription=models.TextField(max_length=1000)
    Food_type = models.CharField(max_length=6)
    Recipe_Created=models.DateField()
    Image=models.CharField(max_length=2000)


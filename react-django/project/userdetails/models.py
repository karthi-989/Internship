from django.db import models

# Create your models here.
class User(models.Model):
    serial_no = models.PositiveIntegerField()
    FirstName= models.CharField(max_length=30)
    LastName = models.CharField(max_length=30)
    Email = models.CharField(max_length=30)
    Course = models.CharField(max_length=30)
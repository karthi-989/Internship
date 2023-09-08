from django.db import models

class Students(models.Model):
    student_Id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    course = models.CharField(max_length=100)


class ExamDetails(models.Model):
    Subject = models.CharField(max_length=100)
    Exam_Date = models.DateField()
    Max_Score = models.PositiveIntegerField(default=93)  # Default max score
    Actual_Score = models.PositiveIntegerField()
    student_Id= models.ForeignKey(Students, on_delete=models.CASCADE)
    percentage= models.PositiveIntegerField(null= True,blank = True)

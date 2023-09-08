from django.urls import path
from .views import *

urlpatterns = [
    path('students/', Students_list.as_view(), name='students_list'),
    path('students/<str:crs>/',Student_course.as_view()),
    path('exam/',Exam_list.as_view()),
    path('exam/pass/', PassStudents.as_view()),
]

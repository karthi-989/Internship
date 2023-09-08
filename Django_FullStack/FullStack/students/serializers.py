from rest_framework import serializers
from .models import *

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Students
        fields = '__all__'
class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamDetails
        fields = '__all__'
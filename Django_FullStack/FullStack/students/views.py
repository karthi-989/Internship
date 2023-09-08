from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .models import *
from .serializers import StudentsSerializer,ExamSerializer

class Students_list (APIView):
    def get(self,request):
        students = Students.objects.all()
        serializer = StudentsSerializer(students, many=True)
        return Response(serializer.data)

    
    def post(self,request):
        serializer = StudentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Student_course(APIView):
    def get(self,request,crs):
        try:
            students=Students.objects.filter(course=crs)
        except Students.DoesNotExist:
            msg={"msg": "not found"}
            return Response(msg ,status=status.HTTP_404_NOT_FOUND )
        serializers = StudentsSerializer(students,many= True)
        return Response(serializers.data, status=status.HTTP_200_OK)
class Exam_list (APIView):
    def get(self,request):
        Exam = ExamDetails.objects.all()
        serializer = ExamSerializer(Exam, many=True)
        return Response(serializer.data)

    
    def post(self,request):
        AC=request.data['Actual_Score']
        Percentage = (AC/93)*100
        E = ExamDetails()
        E.Subject  =  request.data['Subject']
        E.Exam_Date  =  request.data['Exam_Date']
        student_Id  =  request.data['student_Id']
        s = Students.objects.get(student_Id = student_Id)
        E. student_Id = s
        E.Actual_Score =  request.data['Actual_Score']
        E.percentage = Percentage
        E.save()

        return Response(True,status=status.HTTP_201_CREATED)
        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class PassStudents(APIView):
    def get(self, request):
        try:
            per = ExamDetails.objects.filter(percentage__gte=50)
        except ExamDetails.DoesNotExist:
            msg = {"msg": "not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ExamSerializer(per, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   

    
        
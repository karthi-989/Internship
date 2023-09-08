from django.shortcuts import render
from rest_framework.views import APIView
from . models import*
from rest_framework import status
from rest_framework.response import Response
from .serializer import *
from datetime import datetime, timedelta


# Create your views here.
class FoodView(APIView):
    def get(self,request):
        output=Food.objects.all()
        serializer = FoodSerializer(output, many=True)
        return Response(serializer.data)
        
        
    def post(self,request):
        serializer=FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        try:
            user=Food.objects.get(id=id)
        except Food.DoesNotExist:
            msg={ "msg": "not found"}
            return Response (msg, status=status.HTTP_404_NOT_FOUND)
        user.delete()
        return Response({"msg": "deleted"}, status=status.HTTP_204_NO_CONTENT)
class PatchView(APIView):
    def put(self,request,id):
        try:
            user=Food.objects.get(id=id)
        except Food.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=FoodSerializer(user,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Userget(APIView):   
    def get(self,request,id):
        try:
            user = Food.objects.get(id=id)
        except Food.DoesNotExist:
            msg = {"msg": "Not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
            
        serializer = FoodSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
class ProductDataView(APIView):
    def get(self, request,s):
        today = datetime.today()

         
        if s=="this-week":
            j = today - timedelta(days=today.weekday())
            k = j + timedelta(days=6)
           
            products = Food.objects.filter(Recipe_Created__range=[j,k])
        elif s=="last-week":
            St= today - timedelta(days=today.weekday() + 7)
            Et= St+ timedelta(days=6)
            products = Food.objects.filter(Recipe_Created__range=[St, Et])
        elif s=="select-week":
            products=Food.objects.all() 
        
        else:
            return Response({"error": "Invalid input type"}, status=400)
        serializer= FoodSerializer(products, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
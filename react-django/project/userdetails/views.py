from django.shortcuts import render
from rest_framework.views import APIView
from . models import*
from rest_framework import status
from rest_framework.response import Response
from .serializer import *
from django.db.models import Q

# Create your views here.
class UserView(APIView):
    def get(self,request):
        user=User.objects.all() 
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)        
    def post(self,request):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        try:
            user=User.objects.get(id=id)
        except User.DoesNotExist:
            msg={ "msg": "not found"}
            return Response (msg, status=status.HTTP_404_NOT_FOUND)
        user.delete()
        return Response({"msg": "deleted"}, status=status.HTTP_204_NO_CONTENT)
class PatchView(APIView):
    def put(self,request,id):
        try:
            user=User.objects.get(id=id)
        except User.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=UserSerializer(user,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Userget(APIView):   
    def get(self,request,id):
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            msg = {"msg": "Not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
            
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class SearchProduct(APIView):
    def get(self,request):
        obj=User.objects.all()
        query=request.GET.get("name")
        if query is not None:
            data=obj.filter(Q(FirstName__icontains=query)|Q(LastName__icontains=query)|Q(Email__icontains=query)|Q(Course__icontains=query))
            return Response(data.values())


   


        
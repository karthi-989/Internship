from django.shortcuts import render
from rest_framework.views import APIView
from . models import*
from rest_framework import status
from rest_framework.response import Response
from .serializer import *

# Create your views here.
class ReactView(APIView):
    def get(self,request):
        output=React.objects.all()
        serializer = ProductSerializer(output, many=True)
        return Response(serializer.data)
        
        
    def post(self,request):
        serializer=ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
    def put(self,request,id,value):
        # product=React.objects.get(id=id)

        # if value=="increment":
        #     product.quantity+=1
        # elif value=="decrement":
        #     product.quantity-=1
        try:
            obj=React.objects.get(id=id)
            d = {}
            d['product_id'] = obj.product_id
            d['name'] = obj.name
            d['price'] = obj.price

            print(obj,"**")
            if(value == "decrement"):
                if(obj.quantity > 1):
                    obj.quantity -= 1
                    print(obj.quantity,"-------------------")
                    d['quantity'] = obj.quantity
                    
                else:
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            elif(value == "increment"):
                obj.quantity += 1
                print(obj.quantity,"-------------------")
                d['quantity'] = obj.quantity
        except React.DoesNotExist:
            msg ={"msg":"not found error"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductSerializer(obj, data=d)
        if serializer.is_valid():
            serializer.save()
            print("ssssssssssssss",serializer.data)
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)       
    def patch(self,request,id):
        try:
            products=React.objects.get(id=id)
        except React.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductSerializer(products,data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class  ProductView(APIView):   
    def get(self,request,id):
        try:
            user = React.objects.get(id=id)
        except React.DoesNotExist:
            msg = {"msg": "Not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
            
        serializer = ProductSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
class ProductDataView(APIView):
    def get(self, request,s):
         
        if s=="100-1000":
            products = React.objects.filter(price__range=[100, 1000])
           
        elif s=="1000-2000":
            products = React.objects.filter(price__range=[1000, 2000])
             
        elif s=="2000-3000":
            products = React.objects.filter(price__range=[2000, 3000])
        elif s=="select":
            products = React.objects.all()
        else:
            return Response({"error": "Invalid input type"}, status=400)
        serializer= ProductSerializer(products, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
       
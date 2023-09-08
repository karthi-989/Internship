from rest_framework import status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta

class Products_List (APIView):
    def get(self,request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    
    def post(self,request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Product_id(APIView):
    
    def get(self, request, id):
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg = {"msg": "Not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
            
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self,request,id):
        try:
            products=Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductSerializer(products,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self,request,id):
        try:
            products=Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg={"msg":"not found error"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)
        serializer=ProductSerializer(products,data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_205_RESET_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,id):
        try:
            products=Product.objects.get(id=id)
        except Product.DoesNotExist:
            msg={ "msg": "not found"}
            return Response (msg, status=status.HTTP_404_NOT_FOUND)
        products.delete()
        return Response({"msg": "deleted"}, status=status.HTTP_204_NO_CONTENT)

#getting data based on prices and productname
class Product_Info(APIView):
    
    def get(self,request,value,prc):
        try:
            products=Product.objects.filter(product_name=value, price=prc)

        except Product.DoesNotExist:
            msg={"msg":"Not found"}
            return Response(msg,status=status.HTTP_404_NOT_FOUND)

        serializer= ProductSerializer(products, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
#getting data based on favorite
class FavProduct(APIView):
    def get(self,request,is_favourite)    :
        try:
            favs=Product.objects.filter(favorite=is_favourite)
            serializer=ProductSerializer(favs, many =True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
#getting data based on archive
class ArchiveProduct(APIView):
    def get(self,request,is_archive):
        try:
            favs=Product.objects.filter(archived=is_archive)
            serializer=ProductSerializer(favs, many =True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            msg={"msg":"not found"}
            return Response(msg, status=status.HTTP_404_NOT_FOUND)
#Getting data based on this_week
class ProductDataView(APIView):
    def post(self, request):
        today = datetime.today()
        end_date= None
         
        if request.data['Give_data']=="this_week":
            start_date = today - timedelta(days=today.weekday())
            end_date = start_date + timedelta(days=6)
            print(start_date)
            print(end_date)
        elif request.data['Give_data']=="last_week":
            start_date= today - timedelta(days=today.weekday() + 7)
            end_date = start_date+ timedelta(days=6)
            print(start_date)
            print(end_date)   
        elif request.data['Give_data']=="this_month":
            start_date = today.replace(day=1)
            end_date = (start_date + relativedelta(months=1, days=-1))
            print(start_date)
            print(end_date)
            print(end_date-start_date)
        else:
            return Response({"error": "Invalid input type"}, status=400)

        products = Product.objects.filter(date_and_time__range=[start_date, end_date])
        serializer= ProductSerializer(products, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
       
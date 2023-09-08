from django.urls import path
from .views import Products_List,Product_Info,FavProduct,ArchiveProduct,Product_id,ProductDataView



urlpatterns = [
    path('products/', Products_List.as_view(),name="products_list"),
    path('products/<int:id>/', Product_id.as_view()),
    path('products/<str:value>/<int:prc>/', Product_Info.as_view()),
    path('products/<str:is_favourite>/', FavProduct.as_view()),
    path('products/<str:is_archive>/', ArchiveProduct.as_view()),
    path('data/', ProductDataView.as_view())
]

from django.urls import path
from .views import UserView,Userget,PatchView,SearchProduct
urlpatterns=[
    path("view/",UserView.as_view()),
    path("create/",UserView.as_view()),
    path("view/<int:id>/",UserView.as_view()),
    # path("view/<int:id>/", UserView.as_view()),
    path("view1/<int:id>/", Userget.as_view()),
    path("patch/<int:id>/", PatchView.as_view()),
    path("search/",SearchProduct.as_view()),
    
    
]
from django.urls import path
from .views import FoodView,Userget,PatchView,ProductDataView
urlpatterns=[

    path("view1/",FoodView.as_view()), 
    path("view/",FoodView.as_view()),
    path("view/<int:id>/",FoodView.as_view()),
    path("view1/<int:id>/", Userget.as_view()),
    path("patch/<int:id>/", PatchView.as_view()),
    path("data/<str:s>/",ProductDataView.as_view())


]
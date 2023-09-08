from django.urls import path
from .views import ReactView,ProductView,ProductDataView
urlpatterns=[
    path("product/",ReactView.as_view()),
    path("product/<int:id>/",ReactView.as_view()),
    path("product/<int:id>/<str:value>/",ReactView.as_view()),
    path("product1/<int:id>/", ProductView.as_view()),
    path("data/<str:s>/",ProductDataView.as_view())

]
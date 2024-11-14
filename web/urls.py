from django.urls import path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='inicio/')),
    path('inicio/', views.home.as_view(), name = 'Inicio'),
]
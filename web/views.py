from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView


class home(TemplateView):
    template_name = 'general/inicio/index.html'
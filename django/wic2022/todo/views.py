from django.shortcuts import render, HttpResponse

from .models import Todo

# Create your views here.

def home(req):
    todos = Todo.objects.all()
    return HttpResponse('<h1>Hello</h1>')
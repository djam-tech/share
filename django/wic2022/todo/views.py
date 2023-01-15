from django.shortcuts import render, HttpResponse

from .models import Todo

# Create your views here.

def home(request):
    # print('req', request.GET['q'])
    todos = Todo.objects.all()
    # sortie = ''
    # for todo in todos:
    #     sortie = sortie+'<li>'+todo.title+'</li>'
    # return HttpResponse('<ul>'+sortie+'</ul>')
    return render(request, 'base.html', {'todos':todos})
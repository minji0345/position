from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User

# Create your views here.
def getUsers(request):
  user = User.objects.get(id=2)
  context = {
    "name": 1
  }
  return JsonResponse(context)
  

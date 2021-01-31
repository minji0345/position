from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User

# Create your views here.
def getUsers(request):
  context = {
    "name": "accounts"
  }
  return JsonResponse(context)
  

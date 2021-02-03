from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserCreateSerializer, UserSerialzier


# Create your views here.

# class SignupView(generics.CreateAPIView):
#     queryset = User.objects.all()
#     permission_classes = [AllowAny,]
#     serializer_class = UserCreateSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def createUser(request):
    if request.method == 'POST':
        serializer = UserCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = serializer.data
            data["password"] = "password was encryted"
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def search(request):
    if request.method == 'POST':
        query = request.data["value"]
        users = User.objects.get(username=query)
        serializer = UserSerialzier(users)
        return Response(serializer.data, status=status.HTTP_200_OK)


def getUsers(request):
    user = User.objects.all().last()
    return Response({
        "username": user.username,
        "email": user.email,
        "password": user.password
    })



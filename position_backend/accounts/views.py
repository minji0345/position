from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserCreateSerializer, UserSerializer
from accounts.models import Profile
from django.db.utils import IntegrityError



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
            try:
                serializer.save()
                data = serializer.data
                data["password"] = "password was encryted"
                return Response(data, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({
                    "error": "this username already exist"
                }, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def search(request):
    if request.method == 'POST':
        query = request.data["query"]
        users = get_object_or_404(User, username=query)
        serializer = UserSerializer(users)
        return Response(serializer.data, status=status.HTTP_200_OK)
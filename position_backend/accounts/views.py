from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import UserCreateSerializer, UserSerializer
from .models import Profile
from teams.models import Team, TeamLog
from tasks.models import Task
from schedules.models import Schedule



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


# 유저 삭제: 본인과 웹서비스 관리자만 삭제할 수 있도록
class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_url_kwarg = 'uid'

    def perform_destory(self, instance):
        profile = instance.profile
        profile.is_active = False
        profile.save()

        teams = profile.teams
        team_logs = TeamLog.objects.filter(user=profile)
        for team_log in team_logs:
            team_log.username = profile.user.username
            team_log.teamname = team_log.team.name
            team_log.user = team_log.team = None
            team_log.save()

        tasks = profile.tasks
        for task in tasks:
            task.users.remove(profile)
            task.save()
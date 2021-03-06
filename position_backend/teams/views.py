from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
import datetime

from accounts.models import Profile
from accounts.serializers import UserSerializer
from .models import Team, TeamLog
from .serializers import TeamSerializer, TeamLogSerializer


# Create your views here.
class TeamListView(generics.ListCreateAPIView):
    serializer_class = TeamSerializer

    def list(self, request):
        queryset = Team.objects.filter(users=request.user.profile, is_active=True)
        serializer = TeamSerializer(queryset, many=True)
        
        for team in serializer.data:
            users = []
            for pk in team['users']:
                user = Profile.objects.get(id=pk).user
                serialized_user = UserSerializer(user)
                users.append(serialized_user.data)
            team['users'] = users

        return Response(serializer.data, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        # 왜 test를 통할때는 false 값이 담기는 걸까?
        serializer.save(users=[self.request.user.profile], is_active=True)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TeamDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.filter(is_active=True)
    serializer_class = TeamSerializer

    def perform_destroy(self, instance):
        user = self.request.user
        team_log = get_object_or_404(TeamLog, user=user.profile, team=instance)
        team_log.username = user.username
        team_log.teamname = instance.name
        team_log.user = team_log.team = None
        team_log.save()

        instance.is_active = False
        instance.deleted_at = datetime.datetime.now()
        instance.save()


class TeamUserView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Team, id=pk)
    
    def put(self, request, tid, uid, format=None):
        team = self.get_object(pk=tid)
        profile = get_object_or_404(Profile, id=uid)
        team.users.add(profile)
        team.save()

        serializer = TeamSerializer(team)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, tid, uid, format=None):
        team = self.get_object(pk=tid)
        profile = get_object_or_404(Profile, id=uid)
        team.users.remove(profile)
        team.save()

        serializer = TeamSerializer(team)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
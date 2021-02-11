from django.shortcuts import render, get_object_or_404
from django.http import Http404
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status

from .models import Schedule
from .serializers import ScheduleSerializer
from accounts.models import Profile



# Create your views here.
class ScheduleList(generics.ListCreateAPIView):
    serializer_class = ScheduleSerializer

    def list(self, request):
        queryset = Schedule.objects.filter(user=request.user.profile)
        serializer = ScheduleSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
        
    def perform_create(self, serializer):
        serializer.save(user=self.request.user.profile)


class ScheduleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Schedule.objects.filter(is_done=False)
    serializer_class = ScheduleSerializer





from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import Task
from .serializers import TaskSerializer
from accounts.models import Profile
from teams.models import Team



# Create your views here.
class TaskList(APIView):
    def get(self, request, format=None):
        user = request.user.profile
        tasks = user.tasks.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(users=[request.user.profile])
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    def get_object(self, pk):
        try:
            return Task.objects.get(id=pk)
        except TaskDoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk, format=None):
        task = self.get_object(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk, format=None):
        task = self.get_object(pk)
        serializer = TaskSerializer(Task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATE)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskUserView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Task, id=pk)
    
    def put(self, request, tid, uid, format=None):
        task = self.get_object(pk=tid)
        profile = get_object_or_404(Profile, id=uid)
        task.users.add(profile)
        task.save()

        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, tid, uid, format=None):
        task = self.get_object(pk=tid)
        profile = get_object_or_404(Profile, id=uid)
        task.users.remove(profile)
        task.save()

        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
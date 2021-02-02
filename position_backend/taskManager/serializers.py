from rest_framework import serializers
from .models import Task, Schedule


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'content', 'is_done', 'team', 'start_date', 'due_date', 'users']


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['id', 'title', 'content', 'is_done', 'user', 'd_day']
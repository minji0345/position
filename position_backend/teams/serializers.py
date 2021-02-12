from django.contrib.auth.models import User
from accounts.models import Profile
from .models import Team, TeamLog
from rest_framework import serializers

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'team_info' ,'tag_color', 'created_at', 'users', 'is_active']


class TeamLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamLog
        fields = ['id', 'user', 'team', 'username', 'date_joined', 'date_quitted']
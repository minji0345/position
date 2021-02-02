from rest_framwork import serializers
from .models import Team, TeamLog, Profile


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'introduction', 'tasks', 'created_at']


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'tag_color', 'created_at', 'users']


class TeamLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamLog
        fields = ['id', 'user', 'team', 'username', 'date_joined', 'date_quitted']


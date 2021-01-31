from rest_framwork import serializers
from .models import Team, TeamLog, Profile


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'tag_color', 'created_at', 'users']
from rest_framework import serializers
from .models import Team, TeamLog, Profile
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User


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


class UserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(required=True) 
    password = serializers.CharField(required=True)
    password_check = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'password_check']

    def validate(self, data):
        if data['password'] != data['password_check']:
            raise serializers.ValdationError({"password": "Password fields didn't match"})
        return data
        
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
            )
        return user
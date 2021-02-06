from rest_framework import serializers
from .models import Profile
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'introduction', 'tasks', 'created_at']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class UserCreateSerializer(serializers.ModelSerializer):
    username = serializers.EmailField(required=True) 
    password = serializers.CharField(required=True)
    password_check = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'password_check']

    def validate(self, data):
        if data['password'] != data['password_check']:
            raise serializers.ValdationError({"password": "Password fields didn't match"})
        return data
        
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
            )
        return user
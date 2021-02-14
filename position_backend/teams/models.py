from django.db import models
from accounts.models import Profile

# Create your models here.
class Team(models.Model):
    name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    tag_color = models.CharField(max_length=10)
    team_info = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(null=True)
    users = models.ManyToManyField('accounts.Profile', through='TeamLog', related_name='teams')

    def __str__(self):
        return 'name: %s, color: %s, created_at: %s' % (self.name, self.tag_color, self.created_at)


class TeamLog(models.Model):
    user = models.ForeignKey(Profile, on_delete=models.CASCADE, null=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, null=True)
    username = models.CharField(default="", max_length=50, blank=True)
    teamname = models.CharField(default="", max_length=50, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    date_quitted = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return 'user: %s, team: %s' % (self.user.user.username, self.team.name)
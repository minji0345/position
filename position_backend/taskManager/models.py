from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField(default="")
    is_done = models.BooleanField(default=False)
    team = models.ForeignKey('accounts.Team', on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()

    def __str__(self):
        return 'title: %s, team: %s' % (self.title, self.team)


class Schedule(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField(default="")
    is_done = models.BooleanField(default=False)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    d_day = models.DateTimeField()

    def __str__(self):
        return 'title: %s, team: %s' % (self.title, self.team)

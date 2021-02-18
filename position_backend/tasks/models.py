from django.db import models
from django.utils import timezone

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField(default="")
    is_done = models.BooleanField(default=False)
    team = models.ForeignKey('teams.Team', on_delete=models.CASCADE)
    start_date = models.DateTimeField(blank=True)
    due_date = models.DateTimeField(blank=True)

    def __str__(self):
        return 'title: %s, team: %s' % (self.title, self.team)
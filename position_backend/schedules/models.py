from django.db import models
from accounts.models import Profile

# Create your models here.
class Schedule(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField(default="")
    is_done = models.BooleanField(default=False)
    user = models.ForeignKey(Profile, on_delete=models.CASCADE)
    d_day = models.DateTimeField()

    def __str__(self):
        return 'title: %s, team: %s' % (self.title, self.team)
from django.contrib import admin
from .models import Team, TeamLog

# Register your models here.
admin.site.register(Team),
admin.site.register(TeamLog)
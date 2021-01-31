from django.contrib import admin
from .models import Team, Profile, TeamLog

# Register your models here.
admin.site.register(Team),
admin.site.register(Profile),
admin.site.register(TeamLog),
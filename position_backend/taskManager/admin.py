from django.contrib import admin
from .models import Task, Schedule

# Register your models here.
admin.site.register(Task),
admin.site.register(Schedule)
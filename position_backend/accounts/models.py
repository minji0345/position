from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save


# Create your models here.
class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	introduction = models.TextField(default="")
	tasks = models.ManyToManyField('taskManager.Task', related_name='users')
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return 'introduction: %s' % (self.introduction)

	@receiver(post_save, sender=User)
	def create_user_profile(sender, instance, created, **kwargs):
		if created:
			Profile.objects.create(user=instance)

	@receiver(post_save, sender=User)
	def save_user_profile(sender, instance, **kwargs):
		instance.profile.save()


class Team(models.Model):
	name = models.CharField(max_length=30)
	tag_color = models.CharField(max_length=10)
	created_at = models.DateTimeField(auto_now_add=True)
	users = models.ManyToManyField(User, through='TeamLog', related_name='teams')

	def __str__(self):
		return 'name: %s, color: %s, created_at: %s' % (self.name, self.tag_color, self.created_at)


class TeamLog(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	team = models.ForeignKey(Team, on_delete=models.CASCADE)
	username = models.CharField(max_length=20, default="", blank=True)
	date_joined = models.DateTimeField(auto_now_add=True)
	date_quitted = models.DateTimeField(null=True)
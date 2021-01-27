from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save


# Create your models here.
class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	team = models.ManyToManyField(Team, through='TeamLog', )
	introduction = models.TextField(default="")
	created_at = models.DateTimeField()

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
	

class TeamLog(models.Model):
	user = models.ForeignKey(Profile, on_delete=models.CASCADE)
	team = models.FroeignKey(Team, on_delete=models.CASCADE)
	date_joined = models.DateTimeField(auto_now_add=True)
	
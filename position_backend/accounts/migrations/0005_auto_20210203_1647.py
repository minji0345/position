# Generated by Django 3.1.5 on 2021-02-03 16:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20210131_1554'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='team_info',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='team',
            name='users',
            field=models.ManyToManyField(related_name='teams', through='accounts.TeamLog', to='accounts.Profile'),
        ),
        migrations.AlterField(
            model_name='teamlog',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.profile'),
        ),
    ]

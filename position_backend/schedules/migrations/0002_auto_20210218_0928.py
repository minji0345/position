# Generated by Django 3.1.5 on 2021-02-18 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedules', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='d_day',
            field=models.DateTimeField(blank=True),
        ),
    ]

from django.test import TestCase, Client
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
import io

from .models import Team, TeamLog
from tasks.models import Task
from accounts.models import Profile

# Create your tests here.
class TeamTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="test@email.com",
            password="password123"
        )
        client = Client()
        response = client.post('/api/users/signin/', {
            'username': 'test@email.com',
            'password': 'password123'
        })
        stream = io.BytesIO(response.content)
        self.token = JSONParser().parse(stream)['token']

    def test_create_team(self):
        # create a team
        client = Client()
        response = client.post('/api/teams/', {
            'name': 'TEST team',
            'tag_color': 'white',
            'team_info': 'hi, this is test'
        }, HTTP_AUTHORIZATION='JWT %s' % (self.token))
        self.assertEqual(response.status_code, 201)
        print(response)
        self.assertTrue(response.context['is_activated'] == True )

        # create a team without token
        response = client.post('/api/teams/', {
            'name': 'TEST team',
            'tag_color': 'white',
            'team_info': 'hi, this is test'
        })
        self.assertEqual(response.status_code, 401)

        # create a team without required field : name
        response = client.post('/api/teams/', {
            'tag_color': 'white',
            'team_info': 'hi, this is test'
        }, HTTP_AUTHORIZATION='JWT %s' % (self.token))
        self.assertEqual(response.status_code, 400)




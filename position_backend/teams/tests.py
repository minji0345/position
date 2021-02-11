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
        self.user2 = User.objects.create_user(
            username="tes1t@email.com",
            password="password1123"
        )

        client = Client()
        response = client.post('/api/users/signin/', {
            'username': 'test@email.com',
            'password': 'password123'
        })
        stream = io.BytesIO(response.content)
        self.token = JSONParser().parse(stream)['token']

        client.post('/api/teams/', {
            'name': 'TEST team1',
            'tag_color': 'white',
            'team_info': 'hi, this is test'
        }, HTTP_AUTHORIZATION='JWT %s' % (self.token))
        
        client.post('/api/teams/', {
            'name': 'TEST team2',
            'tag_color': 'white',
            'team_info': 'hi, this is test'
        }, HTTP_AUTHORIZATION='JWT %s' % (self.token))
        team = Team.objects.get(id=1)
        team.users.add(self.user2.profile)

    def test_create_team(self):
        # create a team
        client = Client()
        response = client.post('/api/teams/', {
            'name': 'TEST team',
            'tag_color': 'white',
            'team_info': 'hi, this is test'
        }, HTTP_AUTHORIZATION='JWT %s' % (self.token))
        self.assertEqual(response.status_code, 201)

        # check whether new team has properly field value.
        stream = io.BytesIO(response.content)
        is_active = JSONParser().parse(stream)['is_active']
        self.assertTrue(is_active == True )

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

    def test_list_team(self):
        # list the user's teams
        client = Client()
        response = client.get('/api/teams/', HTTP_AUTHORIZATION='JWT %s' % (self.token))
        stream = io.BytesIO(response.content)
        data = JSONParser().parse(stream)
        self.assertEqual(response.status_code, 200)

    def test_detail_team(self):
        client = Client()
        response = client.get('/api/teams/1/', HTTP_AUTHORIZATION='JWT %s' % (self.token))
        self.assertEqual(response.status_code, 200)

    def test_team_add_user(self):
        client = Client()
        team = Team.objects.get(name='TEST team1')

        user = User.objects.create_user(
            username = "test123@test.com",
            password = "123"
        )
        user_id = user.id

        response = client.put(
            '/api/teams/%d/%d/' % (team.id, user.id),
            HTTP_AUTHORIZATION='JWT %s' % (self.token)
        )
        stream = io.BytesIO(response.content)
        after_add_team_users = JSONParser().parse(stream)['users']
        self.assertEqual(response.status_code, 200)
        self.assertIn(user_id, after_add_team_users)

    def test_team_delete_user(self):
        client = Client()
        team = Team.objects.get(id=1)
        user = User.objects.get(id=1)

        response = client.delete(
            '/api/teams/%d/%d/' % (team.id, user.id),
            HTTP_AUTHORIZATION='JWT %s' % (self.token)
        )

        self.assertEqual(response.status_code, 204)
        # self.assertNotIn(user.id, team.users)







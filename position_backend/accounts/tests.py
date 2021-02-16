from django.test import TestCase, Client
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
import io

from .models import Profile

# Create your tests here.
class UserTestCase(TestCase):
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


    def test_signup(self):
        # create a user
        client = Client()
        response = client.post('/api/users/', {
            'username': 'test_signup@email.com',
            'password': 'password123',
            'password_check': 'password123'
        })
        self.assertEqual(response.status_code, 201)

        # already existed username
        response = client.post('/api/users/', {
            'username': 'test@email.com',
            'password': 'password123',
            'password_check': 'password123'
        })
        self.assertEqual(response.status_code, 400)

        # two password fields didn't match
        response = client.post('/api/users/', {
            'username': 'test@email.com',
            'password': 'password123',
            'password_check': 'password12'
        })
        self.assertEqual(response.status_code, 400)

        # missing one required field
        response = client.post('/api/users/', {
            'username': 'test@email.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 400)

    def test_signin(self):
        # sign in
        client = Client()
        response = client.post('/api/users/signin/', {
            'username': "test@email.com",
            'password': "password123"
        })
        self.assertEqual(response.status_code, 200)

        # try to sign in with the wrong password
        response = client.post('/api/users/signin/', {
            'username': "test@email.com",
            'password': "wrong_password"
        })
        self.assertEqual(response.status_code, 400)

        # try to sign in with the non-existent username
        response = client.post('/api/users/signin/', {
            'username': "there_are_no_account_with_this_name@email.com",
            'password': "password123"
        })
        self.assertEqual(response.status_code, 400)

    def test_delete_account(self):
        # delete a user
        client = Client()
        response = client.delete('/api/users/1/', HTTP_AUTHORIZATION="JWT %s" % (self.token))
        self.assertEqual(response.status_code, 204)
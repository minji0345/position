from django.urls import path
from accounts import views
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

urlpatterns = [
    path('', views.createUser, name="create_user"),
    path('signin/', obtain_jwt_token, name="obtain_jwt_token"),
    path('<int:uid>/', views.UserDetailView.as_view(), name='user_detail'),
    path('verify-token', verify_jwt_token, name="verify_jwt_token"),
    path('refresh-token', refresh_jwt_token, name="refresh_jwt_token"),
    path('search/', views.search, name="search_user"),
]

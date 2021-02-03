from django.urls import path, include
from accounts import views

urlpatterns = [
    path('', views.getUsers),
    path('<str:team_title>/', views.getUsers),
    path('<str:team_title>/<int:pk>/', views.getUsers),


    # manage Task model in taskManager app
    path('<str:team_title>/tasks/', include('taskManager.urls')),
]

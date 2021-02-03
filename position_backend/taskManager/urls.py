from django.urls import path
from taskManager import views


urlpatterns = [
    path('', views.TaskList.as_view()),
    path('<int:tid>/', views.TaskDetail.as_view()),
    path('<int:tid>/<int:id>/', views.TaskDetail.as_view()),
]

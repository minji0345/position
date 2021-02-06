from django.urls import path
from . import views

urlpatterns = [
    path('', views.TeamListView.as_view(), name="team_list"),
    path('<int:tid>/', views.TeamDetailView.as_view(), name="team_detail"),
    # path('<int:tid>/<int:uid>/', )
]
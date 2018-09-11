from . import views
from django.urls import path


app_name = 'data_tables'
urlpatterns = [
    path('get_data/', views.get_data, name = 'get_data'),
    path('', views.demo, name = 'demo'),
]
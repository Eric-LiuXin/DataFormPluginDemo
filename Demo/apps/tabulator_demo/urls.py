from . import views
from django.urls import path


app_name = 'tabulator_demo'
urlpatterns = [
    path('get_data/', views.get_data, name = 'get_data'),
    path('', views.demo, name = 'demo'),
]
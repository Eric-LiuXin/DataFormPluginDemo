from django.shortcuts import render
from django.http import HttpResponse
import json
from utils.test_data import TestData

# Create your views here.
def demo(request):
    return render(request, 'tabulator_demo/demo.html', locals())

def get_data(request):
    data = json.dumps({"data" : TestData.get_json(), "last_page" : 1})
    return HttpResponse(data)

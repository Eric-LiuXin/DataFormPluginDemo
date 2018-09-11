from django.shortcuts import render
from django.http import HttpResponse
import json
from utils.test_data import TestData

# Create your views here.
def demo(request):
    return render(request, 'data_tables/demo.html', locals())


def get_data(request):
    data = TestData.get_json()
    return HttpResponse(json.dumps({"draw": 1, "recordsTotal": 57, "recordsFiltered": 57, 'data': data}))
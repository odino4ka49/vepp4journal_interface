import os
import sys
import json
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

#file_dir = os.path.dirname(__file__)
#sys.path.append(file_dir)

from . import zrpcclient


def index(request):
    template = loader.get_template('v4journal/index.html')
    return HttpResponse(template.render())

def v4orbit(request):
    template = loader.get_template('v4journal/v4orbit.html')
    return HttpResponse(template.render())


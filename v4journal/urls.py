__author__ = 'oidin'
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import include

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url('vepp4orbit', views.v4orbit, name='v4orbit'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL , document_root = settings.STATIC_ROOT )
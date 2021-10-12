from django.urls import path, include

from . import views
from rest_framework import routers

# Use SimpleRouter becaust DefaultRouter doesn't work with double slash(e.g. '//')
router = routers.SimpleRouter(trailing_slash=True)
router.register(r'symbols', views.SymbolViewSet)

app_name = 'symbol'
urlpatterns = [
    path('api/', include(router.urls)),
    path('names', views.get_names, name='names'),
    path('adjust-name', views.adjust_name, name='adjust_name'),
    path('test/<str:name>', views.SymbolView.as_view(), name='index'),
]

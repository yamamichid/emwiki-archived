from django.urls import path, include
from django.views.decorators.cache import cache_page
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'articles', views.ArticleViewSet)

app_name = 'article'
urlpatterns = [
    path('test', views.TestView.as_view(), name='test'),
    path('api/', include(router.urls)),
    path('proofs/<str:article_name>/<str:proof_name>', views.ProofView.as_view(), name='proofs'),
    path('refs/<str:article_name>/<str:ref_name>', views.RefView.as_view(), name='refs'),
    path('comments', views.CommentView.as_view(), name='comment'),
    path('names', views.get_names, name="names"),
    path('<str:filename>', cache_page(60)(views.ArticleView.as_view()), name='index'),
]

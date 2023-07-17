from django.urls import path, include
from rest_framework.routers import DefaultRouter

from forms.views.form import FormViewSet
from forms.views.response import ResponseViewSet
from forms.views.submission import SubmissionViewSet

router = DefaultRouter()
router.register(r'forms', FormViewSet)
router.register(r'submissions', SubmissionViewSet)
router.register(r'responses', ResponseViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

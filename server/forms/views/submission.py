from rest_framework.viewsets import ModelViewSet

from forms.models.submission import Submission
from forms.serializers.submission import SubmissionSerializer


class SubmissionViewSet(ModelViewSet):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
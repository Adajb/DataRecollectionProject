from rest_framework.viewsets import ModelViewSet

from forms.models.response import Response
from forms.serializers.response import ResponseSerializer


class ResponseViewSet(ModelViewSet):
    queryset = Response.objects.all()
    serializer_class = ResponseSerializer
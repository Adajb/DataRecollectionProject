from rest_framework.serializers import ModelSerializer

from forms.models.response import Response


class ResponseSerializer(ModelSerializer):
    class Meta:
        model = Response
        fields = ['id', 'submission', 'question', 'choice']
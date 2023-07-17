from rest_framework.serializers import ModelSerializer

from forms.models.response import Response
from forms.models.submission import Submission
from forms.serializers.response import ResponseSerializer


class SubmissionSerializer(ModelSerializer):
    responses = ResponseSerializer(many=True)

    class Meta:
        model = Submission
        fields = ['id', 'form', 'responses']

    def create(self, validated_data):
        responses_data = validated_data.pop('responses')
        submission = Submission.objects.create(**validated_data)
        for response_data in responses_data:
            Response.objects.create(submission=submission, **response_data)
        return submission

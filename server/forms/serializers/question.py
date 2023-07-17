from rest_framework.serializers import ModelSerializer

from forms.models.question import Question
from forms.serializers.choice import ChoiceSerializer


class QuestionSerializer(ModelSerializer):
    choices = ChoiceSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ['id', 'text', 'choices']

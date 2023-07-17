from rest_framework.serializers import ModelSerializer

from forms.models.form import Form
from forms.models.question import Question
from forms.serializers.question import QuestionSerializer


class FormSerializer(ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Form
        fields = ['id', 'title', 'questions']
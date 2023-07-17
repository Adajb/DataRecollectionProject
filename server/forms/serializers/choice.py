from rest_framework.serializers import ModelSerializer

from forms.models.choice import Choice


class ChoiceSerializer(ModelSerializer):
    class Meta:
        model = Choice
        fields = ['id', 'text']
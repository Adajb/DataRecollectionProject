from rest_framework.viewsets import ModelViewSet

from forms.models.form import Form
from forms.serializers.form import FormSerializer


class FormViewSet(ModelViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer

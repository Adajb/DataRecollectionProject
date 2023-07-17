from django.db.models import CASCADE, CharField, ForeignKey, Model

from forms.models.form import Form


class Question(Model):
    form = ForeignKey(Form, related_name='questions', on_delete=CASCADE)
    text = CharField(max_length=200)
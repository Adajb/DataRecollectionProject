from django.db.models import CharField, ForeignKey, Model, CASCADE

from forms.models.question import Question


class Choice(Model):
    question = ForeignKey(Question, related_name='choices', on_delete=CASCADE)
    text = CharField(max_length=200)

from django.db.models import ForeignKey, Model, CASCADE

from forms.models.choice import Choice
from forms.models.question import Question
from forms.models.submission import Submission


class Response(Model):
    submission = ForeignKey(Submission, related_name='responses', on_delete=CASCADE)
    question = ForeignKey(Question, on_delete=CASCADE)
    choice = ForeignKey(Choice, on_delete=CASCADE)
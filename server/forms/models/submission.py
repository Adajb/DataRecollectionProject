from django.db.models import CASCADE, Model, ForeignKey

from forms.models.form import Form


class Submission(Model):
    form = ForeignKey(Form, related_name='submissions', on_delete=CASCADE)
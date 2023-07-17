from django.db.models import Model, CharField


class Form(Model):
    title = CharField(max_length=200)

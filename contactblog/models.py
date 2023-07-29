from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name


class Blog(models.Model):
    title = models.TextField()
    created_date = models.CharField(max_length=40)
    image = models.URLField()
    description = models.TextField(blank=True,null=True)
    question = models.TextField(blank=True,null=True)
    comments = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title

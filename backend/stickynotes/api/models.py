from django.db import models

class StickyNote(models.Model):
    title = models.CharField(null=True, blank=True, max_length=100)
    body = models.TextField(null=True, blank=True)
    update_date = models.DateTimeField(auto_now=True)
    create_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

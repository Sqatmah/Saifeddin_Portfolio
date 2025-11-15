from django.db import models


from django.db import models


class Project(models.Model):
    FOCUS_CHOICES = [
        ('backend', 'Back-End Heavy'),
        ('fullstack', 'Full Stack'),
        ('cloud', 'Cloud-Ready'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    short_description = models.CharField(max_length=300, blank=True)
    description = models.TextField()
    tech_stack = models.CharField(max_length=300, blank=True)
    category = models.CharField(max_length=100, blank=True)

    # Badge إضافي يحدد نوع المشروع
    focus = models.CharField(
        max_length=20,
        choices=FOCUS_CHOICES,
        blank=True,
        null=True,
    )

    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    demo_url = models.URLField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title



class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.email}"



class Post(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.CharField(max_length=300, blank=True)
    content = models.TextField()
    tags = models.CharField(
        max_length=200,
        blank=True,
        help_text="Comma separated tags, e.g. Django, DevOps, AWS"
    )
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='draft'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

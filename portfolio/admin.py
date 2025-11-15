from django.contrib import admin
from .models import Project, ContactMessage, Post


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'focus', 'is_featured', 'created_at')
    list_filter = ('category', 'focus', 'is_featured', 'created_at')
    search_fields = ('title', 'short_description', 'tech_stack', 'description')
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'message')


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('title', 'excerpt', 'content', 'tags')
    prepopulated_fields = {'slug': ('title',)}


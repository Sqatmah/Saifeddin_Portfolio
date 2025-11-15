from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings

from .models import Project, ContactMessage, Post


def home(request):
    projects = Project.objects.filter(is_featured=True)
    latest_posts = Post.objects.filter(status='published')[:2]

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message_text = request.POST.get('message')

        if not (name and email and message_text):
            messages.error(request, "Please fill in all required fields.")
        else:
            # 1) حفظ الرسالة في قاعدة البيانات
            ContactMessage.objects.create(
                name=name,
                email=email,
                message=message_text
            )

            # 2) تجهيز محتوى الإيميل
            subject = f"[Portfolio] New message from {name}"
            body = (
                f"Name: {name}\n"
                f"Email: {email}\n\n"
                f"Message:\n{message_text}"
            )

            try:
                # 3) إرسال الإيميل إلى بريدك
                send_mail(
                    subject,
                    body,
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.CONTACT_RECIPIENT_EMAIL],
                    fail_silently=False,
                )
                messages.success(request, "Thank you! Your message has been sent.")
            except BadHeaderError:
                messages.error(request, "Invalid header found.")
            except Exception:
                # حتى لو الإيميل فشل، نكمل وما نخوف الزائر
                messages.warning(
                    request,
                    "Your message was saved, but there was an issue sending the email."
                )

            return redirect('home')

    context = {
        'projects': projects,
        'latest_posts': latest_posts,
    }
    return render(request, 'portfolio/home.html', context)


def projects_list(request):
    """صفحة جميع المشاريع"""
    category = request.GET.get('category', 'all')

    projects_qs = Project.objects.all()
    if category != 'all':
        projects_qs = projects_qs.filter(category=category)

    context = {
        'projects': projects_qs,
        'active_category': category,
    }
    return render(request, 'portfolio/projects.html', context)


def project_detail(request, slug):
    """صفحة تفاصيل مشروع واحد"""
    project = get_object_or_404(Project, slug=slug)
    return render(request, 'portfolio/project_detail.html', {'project': project})


def blog_list(request):
    """صفحة جميع المقالات المنشورة"""
    posts = Post.objects.filter(status='published')
    context = {
        'posts': posts,
    }
    return render(request, 'portfolio/blog_list.html', context)


def blog_detail(request, slug):
    """صفحة مقال واحد"""
    post = get_object_or_404(Post, slug=slug, status='published')
    return render(request, 'portfolio/blog_detail.html', {'post': post})


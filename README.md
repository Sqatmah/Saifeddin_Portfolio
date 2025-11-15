# 🌐 Saifeddin Portfolio Website  
A modern personal portfolio built with **Django**, **HTML**, **CSS**, and **JavaScript** — showcasing real projects, backend skills, full-stack capabilities, cloud experience, and a clean professional design.

---

## 🚀 Overview  
This portfolio represents the work of **Saifeddin Qatma**, a Back-End & Full Stack Developer specializing in:

- Python (Django / DRF)
- ASP.Net Core 6 (C#)
- REST API design
- Full-stack web development
- Cloud & DevOps foundations (AWS, Alibaba Cloud)

The website includes:
- A modern **home page** with hero section, personal intro, skills, experience timeline  
- A dynamic **projects page** with featured cards, tech badges, icons, and 3D hover animations  
- Detailed **project pages** showing tech stack, description, images  
- A **blog system** for articles  
- A fully functional **contact form**  
- Downloadable **CV button**  
- Clean and scalable Django structure  

---

## 🛠️ Tech Stack  

### **Backend**
- Django 5  
- Django Template Engine  
- Django Admin  
- Python 3.13  

### **Frontend**
- HTML5  
- CSS3 (Custom + Animations + Glass UI)  
- Modern JavaScript  
- Responsive Grid System  

### **Database**
- SQLite (dev mode)  
- Ready for PostgreSQL / MySQL in deployment  

### **Cloud & DevOps (Learning Path)**
- Alibaba Cloud (ECS, RDS, SLB, OSS, VPC)  
- Basic CI/CD  
- Docker fundamentals  
- Linux server management  

---

## 📁 Project Structure


SaifPortfolio/
│
├── portfolio/ # Main Django app (models, views, admin, urls)
├── portfolio_site/ # Project configuration
│
├── static/
│ ├── css/ # Global styles
│ ├── js/ # JS scripts
│ ├── img/ # Images (profile, assets)
│ └── docs/ # CV PDF
│
├── templates/
│ └── portfolio/ # All HTML templates
│
├── media/ # Uploaded images (projects)
│
├── manage.py
└── requirements.txt




---

## 📸 Screenshots

### ⭐ Home Page  
(You can upload screenshots on GitHub and link them here)

### ⭐ Projects Page  
(Images of cards, hover animations, etc.)

### ⭐ Project Detail  
(Tech stack icons, description, image preview)

---

## 🔥 Features

### 🧑‍💻 **1. Dynamic Project System**
- Add projects from Django Admin  
- Upload images  
- Add tech stack  
- Add project type  
- Automatic tech icons  
- Focus badges:  
  - Back-End Heavy  
  - Full Stack  
  - Cloud-Ready  

### 🎨 **2. Modern UI / UX**
- Custom dark theme  
- 3D card motion  
- Hover animations  
- Responsive design  
- Clean typography  

### 📝 **3. Blog System**
- Create articles from admin  
- List page + detail page  
- SEO-friendly URLs  

### ✉️ **4. Contact Form**
- Secure with CSRF  
- Custom success messages  
- Ready for SMTP integration  

### 📄 **5. Download CV**
- Button in hero section  
- Auto-download  
- Simple & elegant  

---

## 🔧 Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/Sqatmah/Saifeddin_Portfolio.git
cd Saifeddin_Portfolio


2. Create virtual environment

python -m venv venv
venv\Scripts\activate


3. Install dependencies

pip install -r requirements.txt


4. Apply migrations

python manage.py migrate


5. Run the server

python manage.py runserver
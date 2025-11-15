// ====== Theme Toggle ======
const root = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
}

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") {
    setTheme(saved);
  } else {
    // default: dark
    setTheme("dark");
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}

initTheme();

// ====== Mobile Menu ======
const menuToggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggleBtn && navLinks) {
  menuToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("open");
    }
  });
}

// ====== Smooth Scroll & Active Link ======
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  });
});

function setActiveLink() {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      const id = section.getAttribute("id");
      links.forEach((l) => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${id}"]`);
      if (active) {
        active.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", setActiveLink);

// ====== Reveal on Scroll ======
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => observer.observe(el));

// ====== Projects Filter ======
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category") || "";
      if (filter === "all" || categories.includes(filter)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ====== Project Modal ======
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalLinks = document.getElementById("modal-links");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".modal-backdrop");

function openModal(card) {
  const title = card.getAttribute("data-title");
  const description = card.getAttribute("data-description");
  const tech = card.getAttribute("data-tech");
  const github = card.getAttribute("data-github");
  const demo = card.getAttribute("data-demo");

  modalTitle.textContent = title || "";
  modalDescription.textContent = description || "";
  modalTech.textContent = tech || "";

  modalLinks.innerHTML = "";
  if (github) {
    const link = document.createElement("a");
    link.href = github;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "View on GitHub";
    modalLinks.appendChild(link);
  }
  if (demo) {
    const link = document.createElement("a");
    link.href = demo;
    link.target = "_blank";
    link.rel = "noopener";
    link.style.marginLeft = "0.75rem";
    link.textContent = "Live Demo";
    modalLinks.appendChild(link);
  }

  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

document.querySelectorAll(".project-details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    if (card) openModal(card);
  });
});

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
/*
// ====== Contact Form (Front-end Only) ======
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

/*if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // هنا لاحقاً تربط الفورم مع باك إند (Django أو Flask)
    formStatus.textContent = "Thank you! This demo form is not yet connected to a backend.";
    contactForm.reset();
  });
}
*/



// ====== Footer Year ======
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}



// ====== Project Cards 3D Tilt ======
function initProjectTilt() {
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;

  const strength = 10; // قوة الميلان

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rx = (-y / rect.height) * strength;
      const ry = (x / rect.width) * strength;

      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
  });
}



document.addEventListener("DOMContentLoaded", () => {
  initSpaceBackground();
  initCursorGlow();
  //initHeroParallax();
  initProjectTilt();
});

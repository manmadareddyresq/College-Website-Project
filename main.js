// main.js - Core Logic and Interactivity

document.addEventListener('DOMContentLoaded', () => {
  // Inject Components
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');
  
  if (headerContainer) headerContainer.innerHTML = window.Components.header;
  if (footerContainer) footerContainer.innerHTML = window.Components.footer;

  // Initialize features
  initTheme();
  initMobileMenu();
  initScrollEffects();
  initSearch();
  initAnimations();
  
  // Page specific initializations
  const path = window.location.pathname;
  if (path.endsWith('index.html') || path === '/' || path.endsWith('ucmh-website/')) {
    initHomePage();
  } else if (path.includes('courses.html')) {
    initCoursesPage();
  } else if (path.includes('faculty.html')) {
    initFacultyPage();
  } else if (path.includes('feedback.html') || path.includes('contact.html')) {
    initForms();
  } else if (path.includes('gallery.html')) {
    initGallery();
  }

  // Update active navigation link
  updateActiveNavLink();
});

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }

  toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    }
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if(hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }
}

function initScrollEffects() {
  const header = document.getElementById('main-header');
  const backToTop = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-sm');
      if(backToTop) backToTop.classList.add('show');
    } else {
      header.classList.remove('shadow-sm');
      if(backToTop) backToTop.classList.remove('show');
    }
  });

  if(backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if(!searchBtn) return;

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
  });

  closeSearch.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.style.display = 'none';
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if(query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    // Search logic using simulated data
    const results = [];
    
    siteData.pages.forEach(p => {
      if(p.title.toLowerCase().includes(query)) results.push({ type: 'Page', title: p.title, url: p.url });
    });
    
    siteData.courses.forEach(c => {
      if(c.title.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query)) {
        results.push({ type: 'Course', title: c.title, url: '/pages/courses.html' });
      }
    });

    siteData.faculty.forEach(f => {
      if(f.name.toLowerCase().includes(query) || f.dept.toLowerCase().includes(query)) {
        results.push({ type: 'Faculty', title: f.name + ' - ' + f.dept, url: '/pages/faculty.html' });
      }
    });

    if(results.length > 0) {
      searchResults.innerHTML = results.map(r => `
        <a href="${r.url}" style="display:block; padding: 1rem; border-bottom: 1px solid var(--border-color); transition: background 0.3s; text-decoration: none; color: inherit;">
          <small style="color: var(--primary); font-weight: bold;">${r.type}</small>
          <div style="font-size: 1.1rem;">${r.title}</div>
        </a>
      `).join('');
      searchResults.style.display = 'block';
    } else {
      searchResults.innerHTML = '<div style="padding: 1rem;">No results found.</div>';
      searchResults.style.display = 'block';
    }
  });
}

function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function updateActiveNavLink() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if(path.endsWith(href) || (path.endsWith('/') && href === '/index.html')) {
      link.style.color = 'var(--primary)';
      link.style.fontWeight = '700';
    }
  });
}

/* Page Specific Functions */

function initHomePage() {
  const newsContainer = document.getElementById('news-container');
  const eventsContainer = document.getElementById('events-container');

  if(newsContainer && siteData.news) {
    newsContainer.innerHTML = siteData.news.slice(0, 3).map(item => `
      <div class="card fade-in">
        <span class="tag mb-4">${item.type}</span>
        <h4>${item.title}</h4>
        <p style="font-size: 0.9rem; margin-bottom: 0.5rem; color: var(--primary)">${item.date}</p>
        <p>${item.excerpt}</p>
      </div>
    `).join('');
  }

  if(eventsContainer && siteData.events) {
    eventsContainer.innerHTML = siteData.events.slice(0, 3).map(ev => `
      <div class="card fade-in">
        <div style="display:flex; justify-content: space-between; align-items: flex-start;">
          <h4>${ev.title}</h4>
        </div>
        <p><strong>Date:</strong> ${ev.date}</p>
        <p><strong>Time:</strong> ${ev.time}</p>
        <p><strong>Location:</strong> ${ev.location}</p>
      </div>
    `).join('');
  }
}

function initCoursesPage() {
  const container = document.getElementById('courses-grid');
  if(!container) return;

  container.innerHTML = siteData.courses.map(course => `
    <div class="card fade-in">
      <h3>${course.title}</h3>
      <p>${course.desc}</p>
      <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color);">
        <p style="margin-bottom: 0;"><strong>Duration:</strong> ${course.duration}</p>
        <p style="margin-bottom: 0;"><strong>Intake:</strong> ${course.intake}</p>
      </div>
    </div>
  `).join('');
}

function initFacultyPage() {
  const container = document.getElementById('faculty-grid');
  if(!container) return;

  container.innerHTML = siteData.faculty.map(fac => `
    <div class="card fade-in text-center">
      <img src="${fac.img}" alt="${fac.name}" style="width: 120px; height: 120px; border-radius: 50%; margin: 0 auto 1rem; object-fit: cover;">
      <h3>${fac.name}</h3>
      <p style="color: var(--primary); font-weight: 500;">${fac.role}</p>
      <p>${fac.dept}</p>
      <p style="font-size: 0.85rem;">Experience: ${fac.exp}</p>
    </div>
  `).join('');
}

function initForms() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;
      
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(input => {
        const errorMsg = input.nextElementSibling;
        if(!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#ef4444';
          if(errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.style.display = 'block';
            errorMsg.textContent = 'This field is required';
          }
        } else {
          input.style.borderColor = 'var(--border-color)';
          if(errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.style.display = 'none';
          }
        }
      });

      if(isValid) {
        // Sanitize and save to localStorage
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Basic XSS prevention (sanitization)
        for(let key in data) {
          data[key] = data[key].replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }

        const type = form.id === 'feedback-form' ? 'feedbacks' : 'contacts';
        const existing = JSON.parse(localStorage.getItem(type) || '[]');
        existing.push({...data, date: new Date().toISOString()});
        localStorage.setItem(type, JSON.stringify(existing));

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Submitted Successfully!';
        btn.style.backgroundColor = '#10b981';
        
        form.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
        }, 3000);
      }
    });
  });
}

function initGallery() {
  const images = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  if(!lightbox) return;

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.classList.remove('active');
  });
}

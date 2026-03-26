// components.js - Reusable UI Components

const Components = {
  header: `
    <header class="glass" id="main-header">
      <div class="container navbar">
        <div class="logo-container">
          <a href="/index.html" style="display: flex; align-items: center; gap: 10px;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            <div class="logo-text">
              <h1>UCMH</h1>
              <p>JNTUH, Hyderabad</p>
            </div>
          </a>
        </div>
        
        <nav class="nav-links" id="nav-links">
          <a href="/index.html">Home</a>
          <a href="/pages/about.html">About</a>
          <a href="/pages/courses.html">Courses</a>
          <a href="/pages/administration.html">Administration</a>
          <a href="/pages/faculty.html">People</a>
          <a href="/pages/gallery.html">Gallery</a>
          <a href="/pages/contact.html">Contact</a>
        </nav>

        <div class="nav-actions">
          <button id="theme-toggle" class="btn btn-outline" aria-label="Toggle Dark Mode">
            <svg id="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <svg id="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>
          <button id="search-btn" class="btn btn-outline" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>

        <button class="hamburger" id="hamburger">
          ☰
        </button>
      </div>
    </header>

    <!-- Search Overlay -->
    <div class="search-overlay" id="search-overlay">
      <div class="search-container">
        <input type="text" class="search-input" id="search-input" placeholder="Search pages, courses, faculty..." autocomplete="off">
        <button class="close-search" id="close-search">✕</button>
        <div class="search-results" id="search-results"></div>
      </div>
    </div>
  `,

  footer: `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="logo-container mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <div class="logo-text">
                <h2>UCMH</h2>
              </div>
            </div>
            <p>University College of Management Hyderabad<br>
            Jawaharlal Nehru Technological University Hyderabad<br>
            Kukatpally, Hyderabad - 500085, Telangana, India</p>
            <p class="mt-4"><strong>Email:</strong> info.sms@jntuh.ac.in<br>
            <strong>Website:</strong> www.jntuhsms.com</p>
          </div>
          
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/pages/about.html">About Us</a></li>
              <li><a href="/pages/vision.html">Vision & Mission</a></li>
              <li><a href="/pages/courses.html">Courses Offered</a></li>
              <li><a href="/pages/faculty.html">Faculty</a></li>
              <li><a href="/pages/contact.html">Contact Us</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Information</h4>
            <ul>
              <li><a href="/pages/placements.html">Placement Cell</a></li>
              <li><a href="/pages/research.html">Research</a></li>
              <li><a href="/pages/anti-ragging.html">Anti-Ragging</a></li>
              <li><a href="/pages/downloads.html">Downloads</a></li>
              <li><a href="/pages/feedback.html">Feedback</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Campus Updates</h4>
            <ul>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Events Calendar</a></li>
              <li><a href="#">Circulars</a></li>
              <li><a href="#">Examinations</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} University College of Management Hyderabad, JNTUH. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    
    <button id="backToTop" aria-label="Back to top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  `
};

// Export to window
window.Components = Components;

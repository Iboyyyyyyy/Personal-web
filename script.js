// CURSOR
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
});

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function animRing() {
  rx = lerp(rx, mx, 0.14);
  ry = lerp(ry, my, 0.14);
  ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
  requestAnimationFrame(animRing);
}
animRing();

// NAV SCROLL EFFECT
const mainNav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
  updateActiveLink();
});

// UPDATE ACTIVE NAV LINK
function updateActiveLink() {
  const scrollPos = window.scrollY + 120;
  let current = '';
  
  document.querySelectorAll('section[id]').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.id;
    }
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.s === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// MOBILE NAV
function openMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
}

// FADE IN OBSERVER
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

// SKILLS DATA
// SKILLS DATA - UPDATED
const skills = [
  // Programming Languages
  { icon: '⌨️', name: 'C#', level: 'Language' },
  { icon: '🐘', name: 'PHP', level: 'Language' },
  { icon: '☕', name: 'Java', level: 'Language' },
  { icon: '⚡', name: 'C++', level: 'Language' },
  { icon: '🟨', name: 'JavaScript', level: 'Language' },
  { icon: '🐍', name: 'Python', level: 'Language' },
  // { icon: '🎯', name: 'Dart', level: 'Language' },
  
  // Web Development
  { icon: '🛠️', name: 'Laravel', level: 'Framework' },
  // { icon: '💚', name: 'Vue.js', level: 'Frontend Framework' },
  { icon: '⚛️', name: 'React.js', level: 'Library' },
  { icon: '🌐', name: 'HTML5', level: 'Markup' },
  { icon: '🎨', name: 'CSS3', level: 'Styling' },
  { icon: '🎯', name: 'Bootstrap', level: 'Framework' },
  // { icon: '📦', name: 'Pinia', level: 'State Management' },
  
  // Databases
  { icon: '🐘', name: 'PostgreSQL', level: 'Database' },
  { icon: '🗄️', name: 'MySQL', level: 'Database' },
  { icon: '📊', name: 'SQL Server', level: 'Database' },
  { icon: '💎', name: 'Oracle DB', level: 'Database' },
  
  // UX/UI Design
  // { icon: '🎨', name: 'Figma', level: 'Design' },
  // { icon: '📐', name: 'Wireframing', level: 'UX' },
  // { icon: '🔄', name: 'Prototyping', level: 'UX' },
  // { icon: '📁', name: 'Design Systems', level: 'UX' },
  
  // API Testing
  { icon: '🔧', name: 'Hoppscotch', level: 'API Testing' },
  { icon: '🚀', name: 'Postman', level: 'API Testing' },
  
  // Concepts
  { icon: '🧠', name: 'OOP', level: 'Paradigm' }
];

// LOAD SKILLS FUNCTION (same as before)
function loadSkills() {
  const skillsGrid = document.getElementById('skillsGrid');
  if (!skillsGrid) return;
  
  skills.forEach(skill => {
    skillsGrid.insertAdjacentHTML('beforeend', `
      <div class="skill-item">
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-level">${skill.level}</div>
      </div>
    `);
  });
}

// PROJECTS DATA
const projects = [
  // IN PROGRESS
  {
    icon: '👗',
    title: 'Fashion Store System',
    desc: 'E-commerce system with product management, cart, authentication, and order features.',
    tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'REST API', 'E-commerce'],
    status: 'In Progress'
},,
  {
    icon: '🚀',
    title: 'REST API Service',
    desc: 'RESTful API with authentication, CRUD operations, and clean architecture patterns. Tested with Hoppscotch for API debugging and validation.',
    tags: ['PHP', 'Laravel', 'JWT', 'Hoppscotch'],
    status: 'In Progress'
  },
  
  // LIVE
  {
    icon: '🎨',
    title: 'Portfolio Website',
    desc: 'Black & gold luxury portfolio with HTML5, CSS3 animations, and vanilla JavaScript.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
    status: 'Live'
  },
  
  // COMPLETED
  {
    icon: '⚜',
    title: 'POS System',
    desc: 'Point of Sale system using Laravel backend and React.js frontend with MySQL database integration.',
    tags: ['Laravel', 'React.js', 'MySQL', 'REST API'],
    status: 'Completed'
  },
  {
    icon: '📦',
    title: 'Store Management System',
    desc: 'Product storage system built with C# using OOP concepts and Oracle Database.',
    tags: ['C#', 'OOP', 'Oracle DB', 'Desktop'],
    status: 'Completed'
  },
  {
    icon: '💰',
    title: 'Loan Management System',
    desc: 'Loan tracking web application with React.js frontend, PHP backend, and MySQL database.',
    tags: ['React.js', 'PHP', 'MySQL', 'Web'],
    status: 'Completed'
  },
  {
    icon: '🏦',
    title: 'Bank Management System',
    desc: 'Console-based banking system in C++ with account creation, deposits, withdrawals, and balance checking.',
    tags: ['C++', 'Console', 'File I/O', 'Procedural'],
    status: 'Completed'
  }
];

// LOAD PROJECTS
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  
  projects.forEach(project => {
    projectsGrid.insertAdjacentHTML('beforeend', `
      <div class="project-card">
        <div class="project-top">
          <div class="project-icon-wrap">${project.icon}</div>
          <span class="project-status">${project.status}</span>
        </div>
        <div class="project-body">
          <div class="project-name">${project.title}</div>
          <div class="project-desc">${project.desc}</div>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `);
  });
}

// CONTACT FORM
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    feedback.textContent = '✓ Message received — I will get back to you soon.';
    feedback.style.opacity = '1';
    contactForm.reset();
    
    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => {
        feedback.textContent = '';
        feedback.style.opacity = '1';
      }, 300);
    }, 4000);
  });
}

// INITIALIZE ALL
function init() {
  loadSkills();
  loadProjects();
  initContactForm();
  
  // Set initial active link
  setTimeout(updateActiveLink, 100);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


// ===== FIXED MOBILE NAVIGATION FUNCTIONS =====
function openMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.add('open');
  // Prevent scrolling on body when menu is open
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.remove('open');
  // Restore scrolling when menu is closed
  document.body.style.overflow = '';
}

// Ensure body overflow is restored on window resize
window.addEventListener('resize', function() {
  const mobileNav = document.getElementById('mobileNav');
  if (window.innerWidth > 768 && mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
});



const audio = document.getElementById('bgMusic');
const audioBtn = document.getElementById('audioBtn');
const volumeSlider = document.getElementById('volumeSlider');
let isPlaying = false;

audio.volume = 0.3;

// Let the audio element drive the UI — most reliable
audio.addEventListener('play',  () => setUI(true));
audio.addEventListener('pause', () => setUI(false));
audio.addEventListener('error', () => {
  audioBtn.textContent = '❌ File not found — check path';
});

function setUI(playing) {
  isPlaying = playing;
  audioBtn.classList.toggle('playing', playing);
  audioBtn.innerHTML = playing
    ? '<span>⏸</span><span>Pause</span>'
    : '<span>🎵</span><span>Play Music</span>';
}

function toggleAudio() {
  isPlaying ? audio.pause() : audio.play().catch(() => {});
}

volumeSlider.addEventListener('input', function() {
  audio.volume = this.value / 100;
});

// Add to your existing JavaScript
const audioPlayer = document.getElementById('audioPlayer');
const footer = document.querySelector('footer');

function checkFooterVisibility() {
  if (!audioPlayer || !footer) return;
  
  const footerPosition = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (footerPosition <= windowHeight - 50) {
    audioPlayer.classList.add('hide');
  } else {
    audioPlayer.classList.remove('hide');
  }
}

window.addEventListener('scroll', checkFooterVisibility);
window.addEventListener('load', checkFooterVisibility);


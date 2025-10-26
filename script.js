// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-fadeIn, .animate-slideInLeft, .animate-slideInRight');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission handling
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
// Enhanced Custom Cursor - Improved with better performance
const initCustomCursor = () => {
  const cursor = document.createElement('div');
  const cursorFollower = document.createElement('div');
  cursor.classList.add('cursor');
  cursorFollower.classList.add('cursor-follower');
  document.body.appendChild(cursor);
  document.body.appendChild(cursorFollower);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    // Main cursor (fast)
    cursorX += (mouseX - cursorX - 4) * 0.2;
    cursorY += (mouseY - cursorY - 4) * 0.2;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Follower cursor (slower)
    followerX += (mouseX - followerX - 20) * 0.1;
    followerY += (mouseY - followerY - 20) * 0.1;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Enhanced hover effects
  document.querySelectorAll('a, button, input, .project-card, .hover-scale').forEach(el => {
      el.addEventListener('mouseenter', () => {
          cursorFollower.classList.add('active');
          cursor.style.transform = 'scale(1.5)';
      });
      
      el.addEventListener('mouseleave', () => {
          cursorFollower.classList.remove('active');
          cursor.style.transform = 'scale(1)';
      });
  });

  // Hide cursor when mouse leaves window
  document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorFollower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorFollower.style.opacity = '1';
  });
};

// Initialize cursor only if not on mobile
if (window.innerWidth > 768) {
  initCustomCursor();
}
// Add pulse animation to profile image
const profileImg = document.querySelector('img[alt="Profile"]');
if (profileImg) {
  profileImg.classList.add('pulse-animation');
}

// Add slide-up animation to timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
  item.classList.add('slide-up-animation');
});

// Add morph animation to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.classList.add('morph-animation');
});
// Dark/light theme toggle
const themeToggle = document.createElement('button');
themeToggle.className = 'fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50 hover-scale glow-animation';
themeToggle.innerHTML = '<i data-feather="moon"></i>';
document.body.appendChild(themeToggle);
feather.replace();

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.querySelector('i').setAttribute('data-feather', 'sun');
  feather.replace();
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  
  if (document.body.classList.contains('dark')) {
    icon.setAttribute('data-feather', 'sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.setAttribute('data-feather', 'moon');
    localStorage.setItem('theme', 'light');
  }
  feather.replace();
});
// Add hover effects to all interactive elements
document.querySelectorAll('a, button, input, .project-card').forEach(el => {
  el.classList.add('hover-scale');
});

// Advanced Particle System
const initParticleSystem = () => {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  document.body.appendChild(particlesContainer);

  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random animation delay
    const delay = Math.random() * 5;
    
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
  }
};

// Magnetic hover effect
const initMagneticHover = () => {
  const magneticElements = document.querySelectorAll('.magnetic-hover');
  
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.setProperty('--tx', `${x * 0.2}px`);
      element.style.setProperty('--ty', `${y * 0.2}px`);
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.setProperty('--tx', '0px');
      element.style.setProperty('--ty', '0px');
  });
};

// Advanced text reveal animation
const initTextReveal = () => {
  const revealElements = document.querySelectorAll('.text-reveal');
  
  revealElements.forEach(element => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
        }
      });
    });
  });
};

// 3D card flip effect
const init3DCards = () => {
  const cards3D = document.querySelectorAll('.card-3d');
  
  cards3D.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'rotateY(10deg) rotateX(5deg) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });
};

// Glitch effect for headings
const initGlitchEffect = () => {
  const glitchElements = document.querySelectorAll('.glitch-text');
  
  glitchElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.animation = 'glitch 0.3s infinite';
      
      setTimeout(() => {
        element.style.animation = 'none';
      }, 1000);
    });
  });
};

// Initialize all advanced animations
document.addEventListener('DOMContentLoaded', () => {
  initParticleSystem();
  initMagneticHover();
  initTextReveal();
  init3DCards();
  initGlitchEffect();
});

// Advanced scroll animations
const initAdvancedScroll = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in-view');
      }
    });
  }, observerOptions);
  
  // Observe all animated elements
  document.querySelectorAll('.animate-fadeIn, .animate-slideInLeft, .animate-slideInRight');
  
  elements.forEach(element => {
    observer.observe(element);
    });
  });
};

// Parallax scrolling effect
const initParallax = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
  
  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)';
    });
  });
};

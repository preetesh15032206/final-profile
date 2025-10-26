class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(124, 58, 237, 0.2);
          transition: all 0.3s ease;
        }

        nav.scrolled {
          padding: 1rem;
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
.logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(90deg, #7c3aed, #9f7aea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }
        a:hover {
          color: #9f7aea;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #9f7aea);
          transition: width 0.3s ease;
        }
        a:hover::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: rgba(17, 24, 39, 0.95);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            clip-path: circle(0px at 90% -10%);
            transition: clip-path 0.5s ease-in-out;
          }
          ul.open {
            clip-path: circle(1000px at 90% -10%);
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo">Preetesh Kumar</div>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
</nav>
    `;
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.shadowRoot.querySelector('nav').classList.add('scrolled');
      } else {
        this.shadowRoot.querySelector('nav').classList.remove('scrolled');
      }
    });

    // Add mobile menu functionality
const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
    const menu = this.shadowRoot.querySelector('ul');
    
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('open');
      feather.replace();
    });

    // Close menu when clicking a link
    this.shadowRoot.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          menu.classList.remove('open');
        }
      });
    });

    // Initialize feather icons
    feather.replace();
  }
}
customElements.define('custom-navbar', CustomNavbar);
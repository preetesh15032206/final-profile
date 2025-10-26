class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
          color: white;
          padding: 3rem 1rem;
          text-align: center;
          border-top: 1px solid rgba(124, 58, 237, 0.2);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .social-links a {
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: rgba(124, 58, 237, 0.5);
          transform: translateY(-3px);
        }
        .copyright {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .made-with {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .heart {
          color: #ef4444;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i data-feather="github"></i></a>
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="mailto:preetesh4153@gmail.com" aria-label="Email"><i data-feather="mail"></i></a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Preetesh Kumar. All rights reserved.</p>
          <div class="made-with">
            <span>Made with</span>
            <span class="heart"><i data-feather="heart"></i></span>
            <span>by Preetesh</span>
          </div>
        </div>
      </footer>
    `;

    // Initialize feather icons
    feather.replace();
  }
}
customElements.define('custom-footer', CustomFooter);
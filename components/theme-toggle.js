class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          position: fixed;
          bottom: 1rem;
          right: 1rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          z-index: 100;
        }
        
        button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px var(--primary);
        }
      </style>
      <button>
        <i data-feather="moon"></i>
      </button>
    `;

    const button = this.shadowRoot.querySelector('button');
    button.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const icon = button.querySelector('i');
      
      if (document.body.classList.contains('dark')) {
        icon.setAttribute('data-feather', 'sun');
        localStorage.setItem('theme', 'dark');
      } else {
        icon.setAttribute('data-feather', 'moon');
        localStorage.setItem('theme', 'light');
      }
      feather.replace();
    });

    // Initialize icon
    feather.replace();
  }
}

customElements.define('theme-toggle', ThemeToggle);
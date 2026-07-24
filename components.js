class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Top Contact Bar -->
      <div class="top-bar">
        <div class="container top-bar-container">
          <div class="top-info">
            <!-- <a href="mailto:vatsalya.since2003@gmail.com"><i class="fa-solid fa-envelope"></i>
              vatsalya.since2003@gmail.com</a> -->
            <a href="tel:+917490977070"><i class="fa-solid fa-phone"></i>+917490977070 </a>
            <a href="tel:+919638710002"><i class="fa-solid fa-phone"></i> +91 963 871 0002</a>
            <a href="tel:+919898155882"><i class="fa-solid fa-phone"></i> +91 989 815 5882</a>
          </div>
          <div class="top-tagline">
            <i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;<span>Rajkot (Head HQ) | Jamnagar | Junagadh | Upaleta | Porbandar</span>
          </div>
        </div>
      </div>

      <!-- Header Navigation -->
      <header class="header">
        <div class="container navbar-container">
          <a href="index.html" class="logo-area" id="logo">
            <img src="images/media__1783340117858.png" alt="Vatsalya Logo" class="logo-img" />
            <div class="logo-text">
              <span class="logo-title">VATSALYA</span>
              <span class="logo-subtitle">SPEECH & HEARING CLINIC</span>
            </div>
          </a>

          <nav class="nav-menu" id="navMenu">
            <a href="index.html" class="nav-link">Home</a>
            <a href="about.html" class="nav-link">About Us</a>
            <a href="services.html" class="nav-link">Services</a>
            <a href="products.html" class="nav-link">Product</a>
            <a href="blogs.html" class="nav-link">Blogs</a>
            <a href="contact.html" class="nav-link">Contact Us</a>

            <div class="mobile-nav-buttons">
              <div class="nav-lang-toggle notranslate" style="justify-content: center; margin-bottom: 10px;">
                <label class="lang-switch">
                  <input type="checkbox" class="globalLangToggle">
                  <span class="lang-slider"></span>
                  <span class="lang-text en-text">EN</span>
                  <span class="lang-text gu-text">GU</span>
                </label>
              </div>
              <a href="tel:+919638710002" class="btn-primary btn-nav-mobile"><i class="fa-solid fa-phone"></i> Call now</a>
              <a href="https://wa.me/+919898155882" class="btn-nav-mobile" style="background-color: #25D366;"><i class="fa-brands fa-whatsapp"></i> WhatsApp now</a>
            </div>
          </nav>

          <div class="nav-actions">
            <div class="nav-lang-toggle notranslate">
              <label class="lang-switch">
                <input type="checkbox" class="globalLangToggle">
                <span class="lang-slider"></span>
                <span class="lang-text en-text">EN</span>
                <span class="lang-text gu-text">GU</span>
              </label>
            </div>
            <a href="tel:+917490977070" class="btn btn-primary btn-nav"><i class="fa-solid fa-phone"></i> Call now</a>
            <a href="https://wa.me/+917490977070" class="btn btn-primary btn-nav" style="background-color: #25D366; border-color: #25D366;"><i class="fa-brands fa-whatsapp"></i> WhatsApp now</a>
            <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    `;

    this.setupActiveLink();
    this.setupTranslation();
  }

  setupTranslation() {
    // Inject Google Translate script dynamically if not present
    if (!document.getElementById('google-translate-script')) {
      const gtContainer = document.createElement('div');
      gtContainer.id = 'google_translate_element';
      gtContainer.style.display = 'none';
      document.body.appendChild(gtContainer);

      window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,gu', autoDisplay: false }, 'google_translate_element');
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }

    // Setup toggle logic
    const toggles = this.querySelectorAll('.globalLangToggle');
    const hasGuCookie = document.cookie.includes('googtrans=/en/gu');

    toggles.forEach(toggle => {
      // Set initial state based on Google Translate cookie if present
      if (hasGuCookie) toggle.checked = true;

      toggle.addEventListener('change', (e) => {
        // Sync the other toggle if present and show loading state
        toggles.forEach(t => {
          if (t !== e.target) t.checked = e.target.checked;
          const switchEl = t.closest('.lang-switch');
          if (switchEl) switchEl.classList.add('loading');
        });

        const triggerTranslation = (selectEl) => {
          selectEl.value = e.target.checked ? 'gu' : 'en';
          selectEl.dispatchEvent(new Event('change'));

          let debounceTimer;
          let fallbackTimer;

          const clearLoading = () => {
            clearTimeout(debounceTimer);
            clearTimeout(fallbackTimer);
            if (observer) observer.disconnect();
            toggles.forEach(t => {
              const switchEl = t.closest('.lang-switch');
              if (switchEl) switchEl.classList.remove('loading');
            });
          };

          const observer = new MutationObserver(() => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(clearLoading, 400); // 400ms after last mutation
          });

          observer.observe(document.body, { childList: true, subtree: true, characterData: true });

          // Fallback if no mutations occur or they are endless
          fallbackTimer = setTimeout(clearLoading, 2000);
        };

        const select = document.querySelector('.goog-te-combo');
        if (select) {
          triggerTranslation(select);
        } else {
          // If script hasn't loaded yet, try again after a short delay
          setTimeout(() => {
            const selectRetry = document.querySelector('.goog-te-combo');
            if (selectRetry) {
              triggerTranslation(selectRetry);
            } else {
              toggles.forEach(t => {
                const switchEl = t.closest('.lang-switch');
                if (switchEl) switchEl.classList.remove('loading');
              });
            }
          }, 1000);
        }
      });
    });
  }

  setupActiveLink() {
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = this.querySelectorAll('.nav-link');
    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Footer Area -->
      <footer id="footer" class="footer">
        <div class="container footer-grid">
          <!-- Col 1: Clinic Bio -->
          <div class="footer-col footer-bio">
            <a href="#" class="logo-area logo-footer">
              <img src="images/media__1783340117858.png" alt="Vatsalya Logo" class="logo-img" />
              <div class="logo-text">
                <span class="logo-title">VATSALYA</span>
                <span class="logo-subtitle">SPEECH & HEARING CLINIC</span>
              </div>
            </a>
            <p class="footer-bio-text">
              Where sound becomes clarity, and speech finds its voice – Vatsalya
              Speech & Hearing Clinic.
            </p>
            <div class="social-links">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i
                  class="fa-brands fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i
                  class="fa-brands fa-instagram"></i></a>
              <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          <!-- Col 2: Branches -->
          <div class="footer-col notranslate">
            <h3 class="footer-title">Branches</h3>
            <ul class="footer-links-list">
              <li><i class="fa-solid fa-location-dot"></i> Rajkot (Head HQ)</li>
              <li><i class="fa-solid fa-location-dot"></i> Jamnagar</li>
              <li><i class="fa-solid fa-location-dot"></i> Junagadh</li>
              <li><i class="fa-solid fa-location-dot"></i> Upaleta</li>
              <li><i class="fa-solid fa-location-dot"></i> Porbandar</li>
            </ul>
          </div>

          <!-- Col 3: Contact Details -->
          <div class="footer-col">
            <h3 class="footer-title">Contact Details</h3>
            <ul class="footer-links-list">
              <li>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+917490977070">+91 74909 77070</a>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+919638710002">+91 963 871 0002</a>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <a href="tel:+919898155882">+91 989 815 5882</a>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:vatsalya.clinic2003@gmail.com">vatsalya.clinic2003@gmail.com</a>
              </li>
            </ul>
          </div>

          <!-- Col 4: Video Reviews -->
          <div class="footer-col">
            <h3 class="footer-title">Satisfied Patient Videos</h3>
            <div class="video-grid">
              <div class="video-thumbnail-wrapper" onclick="alert('Playing patient testimonial video...')">
                <img src="images/hero_hearing_clinic_1783338378475.png" alt="Patient Video 1" class="video-thumb" />
                <div class="play-btn-overlay">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </div>
              <div class="video-thumbnail-wrapper" onclick="alert('Playing patient testimonial video...')">
                <img src="images/doctors_clinic_1783338394363.png" alt="Patient Video 2" class="video-thumb" />
                <div class="play-btn-overlay">
                  <i class="fa-solid fa-circle-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-timing-bar">
          <div class="container footer-timing-grid">
            <div class="timing-col">
              <h4 class="timing-title">
                <i class="fa-solid fa-clock"></i> Visiting Hours
              </h4>
              <p>Mon - Sat: 10:00 am - 7:00 pm</p>
            </div>
            <div class="address-col">
              <h4 class="timing-title">
                <i class="fa-solid fa-map-location-dot"></i> Rajkot HQ Address
              </h4>
              <p>
                104, Twin Star Building, South Block, Mahapujadham chowk, Near 
                Mirracle Doctor House, Near Nanamava Circle, 150 feet Ring Road, 
                Rajkot - 360005
              </p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container footer-bottom-container">
            <p>
              Copyright &copy; 2024 Vatsalya Speech and Hearing Clinic- All Rights
              Reserved.
            </p>
            <p>- Before Visit Please, Take Prior Appointment</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);

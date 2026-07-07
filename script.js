document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. Dynamic soundwave & margin decorations
    // ==========================================
    const injectWaveforms = () => {
        // A. Inject Margin Waveforms (left and right) with animated floating medical particles
        const leftWave = document.createElement('div');
        leftWave.className = 'margin-waveform margin-waveform-left';
        leftWave.innerHTML = `
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
                <path class="wave-path-left" d="M50,0 L50,150 Q40,160 50,170 L50,220 L75,225 L20,235 L50,240 Q60,250 50,260 L50,450 Q40,460 50,470 L50,520 L75,525 L20,535 L50,540 Q60,550 50,560 L50,750 Q40,760 50,770 L50,820 L75,825 L20,835 L50,840 Q60,850 50,860 L50,1000" />
            </svg>
            <div class="side-particle icon-primary" style="top: 15%;"><i class="fa-solid fa-plus"></i></div>
            <div class="side-particle bubble-secondary side-bubble" style="top: 40%;"></div>
            <div class="side-particle icon-secondary" style="top: 65%;"><i class="fa-solid fa-heart-pulse"></i></div>
            <div class="side-particle bubble-primary side-bubble" style="top: 85%;"></div>
        `;
        const rightWave = document.createElement('div');
        rightWave.className = 'margin-waveform margin-waveform-right';
        rightWave.innerHTML = `
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none">
                <path class="wave-path-right" d="M50,0 L50,180 Q60,190 50,200 L50,250 L25,255 L80,265 L50,270 Q40,280 50,290 L50,480 Q60,490 50,500 L50,550 L25,555 L80,565 L50,570 Q40,580 50,590 L50,780 Q60,790 50,800 L50,850 L25,855 L80,865 L50,870 Q40,880 50,890 L50,1000" />
            </svg>
            <div class="side-particle icon-secondary" style="top: 20%;"><i class="fa-solid fa-heart-pulse"></i></div>
            <div class="side-particle bubble-primary side-bubble" style="top: 45%;"></div>
            <div class="side-particle icon-primary" style="top: 70%;"><i class="fa-solid fa-plus"></i></div>
            <div class="side-particle bubble-secondary side-bubble" style="top: 90%;"></div>
        `;
        document.body.appendChild(leftWave);
        document.body.appendChild(rightWave);

        // B. Inject Center soundwave backgrounds behind all main section headers
        const headers = document.querySelectorAll('.section-header');
        headers.forEach(header => {
            if (header.querySelector('.center-waveform')) return;
            header.style.position = 'relative';
            const centerWave = document.createElement('div');
            centerWave.className = 'center-waveform';
            centerWave.innerHTML = `
                <svg viewBox="0 0 800 150" fill="none" class="center-wave-svg">
                    <defs>
                        <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="var(--primary)" stop-opacity="0" />
                            <stop offset="50%" stop-color="var(--secondary)" stop-opacity="0.35" />
                            <stop offset="100%" stop-color="var(--primary)" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M 0,75 C 100,75 150,20 200,75 C 250,130 300,5 350,75 C 400,145 450,5 500,75 C 550,145 600,20 650,75 C 700,130 800,75 800,75" stroke="url(#wave-grad)" stroke-width="3.5" stroke-linecap="round" />
                </svg>
            `;
            header.insertBefore(centerWave, header.firstChild);
        });
    };

    // Dynamic injection of the video reviews section and playing modal
    const injectVideoSection = () => {
        const footer = document.querySelector('footer');
        if (!footer) return;

        // A. Create Video Reviews Section
        const videoSection = document.createElement('section');
        videoSection.className = 'video-reviews-section py-section';
        videoSection.innerHTML = `
            <div class="container">
                <div class="section-header text-center reveal-on-scroll" style="position: relative;">
                    <span class="section-subtitle text-center">Patient Success Stories</span>
                    <h2 class="section-title text-center">Video Testimonials</h2>
                    <p class="section-desc text-center">Hear from our patients who recovered their hearing clarity and speech voice at Vatsalya Clinic.</p>
                </div>
                
                <div class="video-reviews-grid">
                    <div class="video-card-item reveal-on-scroll" data-video-id="TQPXc-zu5-E">
                        <div class="video-card-thumb">
                            <img src="https://img.youtube.com/vi/TQPXc-zu5-E/sddefault.jpg" alt="Patient Video 1">
                            <div class="video-card-play"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="video-card-info">
                            <h3>Successful Patient Journey</h3>
                            <p>Watch this patient's feedback on their successful hearing aid fitting.</p>
                        </div>
                    </div>
                    <div class="video-card-item reveal-on-scroll" data-video-id="gy-PYBIB9Po">
                        <div class="video-card-thumb">
                            <img src="https://img.youtube.com/vi/gy-PYBIB9Po/sddefault.jpg" alt="Patient Video 2">
                            <div class="video-card-play"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="video-card-info">
                            <h3>Speech Clarity Progress</h3>
                            <p>Hear from this patient about their speech assessment and therapy feedback.</p>
                        </div>
                    </div>
                    <div class="video-card-item reveal-on-scroll" data-video-id="Zl4gu2Xq6SI">
                        <div class="video-card-thumb">
                            <img src="https://img.youtube.com/vi/Zl4gu2Xq6SI/sddefault.jpg" alt="Patient Video 3">
                            <div class="video-card-play"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="video-card-info">
                            <h3>Audiological Support Story</h3>
                            <p>Review of traditional audiological diagnosis and speech care results.</p>
                        </div>
                    </div>
                    <div class="video-card-item reveal-on-scroll" data-video-id="pFzwSiNoNq0">
                        <div class="video-card-thumb">
                            <img src="https://img.youtube.com/vi/pFzwSiNoNq0/sddefault.jpg" alt="Patient Video 4">
                            <div class="video-card-play"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="video-card-info">
                            <h3>Hearing Aid Fitting Success</h3>
                            <p>Detailed patient experience of digital hearing aids trial and fitting.</p>
                        </div>
                    </div>
                    <div class="video-card-item reveal-on-scroll" data-video-id="17FQNOh8MIE">
                        <div class="video-card-thumb">
                            <img src="https://img.youtube.com/vi/17FQNOh8MIE/sddefault.jpg" alt="Patient Video 5">
                            <div class="video-card-play"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="video-card-info">
                            <h3>Pediatric Audiology Feedback</h3>
                            <p>Parents' review on pediatric speech therapy and hearing testing.</p>
                        </div>
                    </div>
                    <div class="video-card-item reveal-on-scroll" data-video-id="sI3ZWaM5dAM">
                        <div class="video-card-thumb">
                            <img src="https://img.youtube.com/vi/sI3ZWaM5dAM/sddefault.jpg" alt="Patient Video 6">
                            <div class="video-card-play"><i class="fa-solid fa-play"></i></div>
                        </div>
                        <div class="video-card-info">
                            <h3>Cochlear Implant Success</h3>
                            <p>Patient recovery journey after premium cochlear implant rehabilitation.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        footer.parentNode.insertBefore(videoSection, footer);

        // B. Set Click Listeners to Open Videos in a New Tab to bypass YouTube domain restriction errors (Error 153)
        const videoCards = videoSection.querySelectorAll('.video-card-item');
        videoCards.forEach(card => {
            card.addEventListener('click', () => {
                const videoId = card.getAttribute('data-video-id');
                if (videoId) {
                    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                }
            });
        });

        // E. Replace placeholder videos in the footer with clinical trust text
        const footerTitles = document.querySelectorAll('.footer-title');
        footerTitles.forEach(title => {
            if (title.textContent.trim() === 'Satisfied Patient Videos') {
                title.textContent = 'Vatsalya Care';
                const footerCol = title.parentElement;
                const videoGrid = footerCol.querySelector('.video-grid');
                if (videoGrid) {
                    const textP = document.createElement('p');
                    textP.className = 'footer-bio-text';
                    textP.style.marginTop = '0';
                    textP.style.fontSize = '0.92rem';
                    textP.textContent = 'Providing professional clinical hearing aids trial, fitting, voice therapy, and pediatric testing services since 2003. Reach out to coordinate an appointment today.';
                    
                    const bookBtn = document.createElement('a');
                    bookBtn.href = 'contact.html';
                    bookBtn.className = 'btn btn-secondary btn-sm';
                    bookBtn.style.marginTop = '12px';
                    bookBtn.textContent = 'Book Slot';
                    
                    videoGrid.replaceWith(textP);
                    footerCol.appendChild(bookBtn);
                }
            }
        });
    };

    injectWaveforms();
    injectVideoSection();

    // ==========================================
    // 1. Mobile Menu Toggle
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ==========================================
    // 2. Active Menu Path Highlight
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Highlight active page based on file name matching
        if (currentFile === href) {
            link.classList.add('active');
        } else if (href === 'index.html' && (currentFile === '' || currentFile === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ==========================================
    // 3. Stats Count Up Animation
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 2000; // Animation duration in ms
            const stepTime = Math.abs(Math.floor(duration / target));
            let currentNum = 0;

            const timer = setInterval(() => {
                currentNum += Math.ceil(target / 100) || 1;
                if (currentNum >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = currentNum;
                }
            }, Math.max(stepTime, 15));
        });
    };

    // Intersection Observer to trigger animation when scrolled into view
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animateStats();
                animated = true;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats-section, .stats-section-about');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // ==========================================
    // 4. About Us Read More Expand
    // ==========================================
    const btnAboutReadMore = document.getElementById('btnAboutReadMore');
    const aboutExtraContent = document.getElementById('aboutExtraContent');

    if (btnAboutReadMore && aboutExtraContent) {
        btnAboutReadMore.addEventListener('click', () => {
            aboutExtraContent.classList.toggle('open');
            if (aboutExtraContent.classList.contains('open')) {
                btnAboutReadMore.textContent = 'Read Less';
            } else {
                btnAboutReadMore.textContent = 'Learn More';
            }
        });
    }

    // ==========================================
    // 5. Word-based Math Captcha Generator
    // ==========================================
    const captchaQuestion = document.getElementById('captchaQuestion');
    const captchaInput = document.getElementById('captchaInput');
    let captchaAnswer = 0;

    // List of dynamic word-based math equations matching user's requested style
    const captchaPuzzles = [
        { text: '11 − one =', answer: 10 },
        { text: '15 − five =', answer: 10 },
        { text: 'nine + 4 =', answer: 13 },
        { text: 'seven − three =', answer: 4 },
        { text: '12 − two =', answer: 10 },
        { text: 'six + 5 =', answer: 11 },
        { text: '13 − four =', answer: 9 },
        { text: 'ten − 6 =', answer: 4 }
    ];

    const generateCaptcha = () => {
        if (!captchaQuestion) return;
        const randomIndex = Math.floor(Math.random() * captchaPuzzles.length);
        const puzzle = captchaPuzzles[randomIndex];
        captchaAnswer = puzzle.answer;
        captchaQuestion.textContent = puzzle.text;
        if (captchaInput) {
            captchaInput.value = '';
        }
    };

    generateCaptcha();

    // ==========================================
    // 6. Booking Form Validation & Submission
    // ==========================================
    const appointmentForm = document.getElementById('appointmentForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const modalPatientName = document.getElementById('modalPatientName');
    const modalServiceName = document.getElementById('modalServiceName');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Inputs
            const patientName = document.getElementById('patientName');
            const patientEmail = document.getElementById('patientEmail');
            const contactNumber = document.getElementById('contactNumber');
            const serviceRequired = document.getElementById('serviceRequired');
            const appointmentDate = document.getElementById('appointmentDate');
            const captchaInputVal = parseInt(captchaInput.value, 10);

            // Error Elements
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const phoneError = document.getElementById('phoneError');
            const serviceError = document.getElementById('serviceError');
            const dateError = document.getElementById('dateError');
            const captchaError = document.getElementById('captchaError');

            let isValid = true;

            // Reset States
            const formGroups = document.querySelectorAll('.form-group, .captcha-container');
            formGroups.forEach(group => group.classList.remove('invalid'));

            // Name Validation
            if (!patientName.value.trim()) {
                patientName.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Email Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(patientEmail.value.trim())) {
                patientEmail.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Phone Validation (10 digits starting with 6-9)
            const phoneRegex = /^[6-9]\d{9}$/;
            if (!phoneRegex.test(contactNumber.value.trim())) {
                contactNumber.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Service Required Validation
            if (!serviceRequired.value) {
                serviceRequired.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Date Validation
            if (!appointmentDate.value) {
                appointmentDate.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Captcha Validation
            if (captchaInputVal !== captchaAnswer) {
                captchaInput.closest('.captcha-container').classList.add('invalid');
                isValid = false;
            }

            // Submit Form if Valid
            if (isValid) {
                // Set modal content
                if (modalPatientName) modalPatientName.textContent = patientName.value.trim();
                if (modalServiceName) modalServiceName.textContent = serviceRequired.options[serviceRequired.selectedIndex].text;

                // Show Success Modal
                if (confirmationModal) {
                    confirmationModal.classList.add('open');
                }

                // Reset Form and Captcha
                appointmentForm.reset();
                generateCaptcha();
            }
        });
    }

    // Close Confirmation Modal
    if (modalCloseBtn && confirmationModal) {
        modalCloseBtn.addEventListener('click', () => {
            confirmationModal.classList.remove('open');
        });
    }

    // ==========================================
    // 6. GSAP Premium Animations & ScrollTrigger
    // ==========================================
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Add active class to body to disable conflicting transitions
        document.body.classList.add('gsap-active');

        // Global load listener to refresh ScrollTrigger measurements once all assets load
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });

        // A. Scroll Reveal using ScrollTrigger (filtering out cards inside staggered grids to avoid conflicts)
        const revealElements = Array.from(document.querySelectorAll('.reveal-on-scroll'))
            .filter(el => !el.closest('.services-grid, .products-grid, .blogs-grid, .stats-card-grid, .features-custom-grid, .video-reviews-grid'));
            
        revealElements.forEach(el => {
            gsap.fromTo(el, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // B. Staggered Grid Cards Entrance (using fromTo to guarantee opacity: 1 and avoid default CSS opacity: 0 conflicts)
        const grids = ['.services-grid', '.products-grid', '.blogs-grid', '.stats-card-grid', '.features-custom-grid', '.video-reviews-grid'];
        grids.forEach(gridClass => {
            const grid = document.querySelector(gridClass);
            if (grid) {
                const cards = grid.querySelectorAll(':scope > *');
                if (cards.length > 0) {
                    gsap.fromTo(cards, 
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            stagger: 0.12,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: grid,
                                start: 'top 85%',
                                toggleActions: 'play none none none'
                            }
                        }
                    );
                }
            }
        });

        // C. Floating Particles Organic Floating Loop (animates both center and side gutter particles)
        const floatingParticles = document.querySelectorAll('.floating-particle, .side-particle');
        floatingParticles.forEach(particle => {
            gsap.to(particle, {
                y: 'random(-30, 30)',
                x: 'random(-10, 10)',
                rotation: particle.classList.contains('side-bubble') ? 0 : 'random(-20, 20)',
                duration: 'random(4.5, 7.5)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });

        // D. 3D Card Tilt Effect on Hover
        const hoverCards = document.querySelectorAll('.service-card, .product-card, .blog-card, .stat-card, .feature-item-card, .vm-card, .video-card-item');
        hoverCards.forEach(card => {
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(card, {
                    rotateY: x * 0.06,
                    rotateX: -y * 0.06,
                    transformPerspective: 1000,
                    scale: 1.025,
                    boxShadow: '0 15px 30px rgba(81, 85, 166, 0.15)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    boxShadow: 'var(--shadow-md)',
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });

        // E. Dynamic Click Ripple Effect
        document.addEventListener('click', (e) => {
            const target = e.target.closest('.btn, .service-card, .product-card, .blog-card, .nav-link, .vm-card');
            if (!target) return;

            // Ensure relative positioning
            if (getComputedStyle(target).position === 'static') {
                target.style.position = 'relative';
            }
            if (getComputedStyle(target).overflow !== 'hidden') {
                target.style.overflow = 'hidden';
            }

            const ripple = document.createElement('span');
            ripple.classList.add('click-ripple');

            const rect = target.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            target.appendChild(ripple);

            gsap.fromTo(ripple,
                { scale: 0, opacity: 0.35 },
                { scale: 2.2, opacity: 0, duration: 0.65, ease: 'power2.out', onComplete: () => ripple.remove() }
            );
        });

        // F. Preloader & Hero Entrance Timeline Animation
        const preloader = document.getElementById('preloader');
        if (preloader) {
            const startTimelineAnimation = () => {
                const tl = gsap.timeline({
                    onComplete: () => {
                        preloader.style.display = 'none';
                        ScrollTrigger.refresh();
                    }
                });
                
                tl.to(preloader, {
                    opacity: 0,
                    yPercent: -100,
                    duration: 0.75,
                    ease: 'power3.inOut'
                })
                .from('.header', { y: -80, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.35')
                .from('.hero-content > *', { opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.35')
                .from('.hero-image-wrapper', { opacity: 0, scale: 0.88, x: 50, duration: 0.9, ease: 'power3.out' }, '-=0.5')
                .from('.floating-badge', { opacity: 0, scale: 0.6, duration: 0.5, stagger: 0.15, ease: 'back.out(1.6)' }, '-=0.5');
            };

            if (document.readyState === 'complete') {
                setTimeout(startTimelineAnimation, 450);
            } else {
                window.addEventListener('load', () => {
                    setTimeout(startTimelineAnimation, 450);
                });
            }

            // Fallback timeout in case load event does not fire
            setTimeout(() => {
                if (preloader.style.display !== 'none') {
                    startTimelineAnimation();
                }
            }, 3000);
        } else {
            // No preloader pages entrance (like subpages)
            gsap.from('.header', { y: -80, opacity: 0, duration: 0.7, ease: 'power3.out' });
            gsap.from('.page-header', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' }, '-=0.3');
        }



        // H. Hero Parallax Scroll Effect
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            gsap.to('.hero-img', {
                yPercent: 12,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
            gsap.to('.badge-1', {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
            gsap.to('.badge-2', {
                yPercent: -8,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        // I. Section Title Word-by-Word Slide Up Mask
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const rawText = title.textContent.trim();
            if (rawText.length > 0 && !title.querySelector('.split-word')) {
                title.innerHTML = rawText.split(' ').map(word => {
                    return `<span class="split-word" style="display: inline-block; overflow: hidden; vertical-align: top;"><span class="split-char" style="display: inline-block; transform: translateY(105%); opacity: 0;">${word}&nbsp;</span></span>`;
                }).join('');

                const chars = title.querySelectorAll('.split-char');
                gsap.to(chars, {
                    opacity: 1,
                    y: 0,
                    duration: 0.65,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                });
            }
        });
    } else {
        // Fallback for reveals if GSAP is not available
        const revealElements = document.querySelectorAll('.reveal-on-scroll');
        if (revealElements.length > 0) {
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            revealElements.forEach(el => revealObserver.observe(el));
        }

        const preloader = document.getElementById('preloader');
        if (preloader) {
            const hidePreloader = () => {
                setTimeout(() => {
                    preloader.classList.add('fade-out');
                }, 500);
            };
            if (document.readyState === 'complete') {
                hidePreloader();
            } else {
                window.addEventListener('load', hidePreloader);
            }
        }
    }

    // ==========================================
    // 7. Sticky Header Scroll Adjustment
    // ==========================================
    const header = document.querySelector('.header');
    if (header) {
        const toggleHeaderStickyClass = () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', toggleHeaderStickyClass);
        toggleHeaderStickyClass(); // Initial check on load
    }

});

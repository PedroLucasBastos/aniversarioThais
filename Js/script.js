/* ============================================
   Thais 40 Anos - JavaScript
   Animações e Interações
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Header scroll effect ----------
  const header = document.querySelector('.header');

  const handleHeaderScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ---------- Mobile menu ----------
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Intersection Observer: Fade-up animations ----------
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15,
  };

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up').forEach(el => {
    fadeObserver.observe(el);
  });

  // ---------- Smooth scroll for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // ---------- Hero Slideshow (15s transition) ----------
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 15000); // 15 seconds
  }

  // ---------- Parallax scroll effect for the dream section image ----------
  const dreamImg = document.querySelector('.dream-image img');
  const dreamContainer = document.querySelector('.dream-image');

  if (dreamImg && dreamContainer) {
    const handleParallax = () => {
      const rect = dreamContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the image container is visible in the viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate the percentage of the container's progress through the viewport
        const scrollRange = viewportHeight + rect.height;
        const scrollOffset = viewportHeight - rect.top;
        const progress = Math.min(Math.max(scrollOffset / scrollRange, 0), 1); // Clamp between 0 and 1

        // Translate the image vertically from 0% (enters viewport) to -10% (leaves viewport)
        // Since image has height: 110%, this shifts it upward smoothly as we scroll down
        const translateY = -10 * progress;
        dreamImg.style.transform = `translateY(${translateY}%)`;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    // Trigger once on load to set initial position
    handleParallax();
  }

});

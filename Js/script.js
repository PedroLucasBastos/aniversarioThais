/* ============================================
   Thais 40 Anos - JavaScript
   Animações e Interações
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Renderização dinâmica dos presentes ----------
  const giftsContainer = document.getElementById('gifts-container');

  if (giftsContainer && typeof gifts !== 'undefined') {
    // Agrupa os presentes por categoria, mantendo a ordem de aparição
    const categorias = [];
    const categoriaMap = {};

    gifts.forEach(gift => {
      if (!categoriaMap[gift.categoria]) {
        categoriaMap[gift.categoria] = [];
        categorias.push(gift.categoria);
      }
      categoriaMap[gift.categoria].push(gift);
    });

    // Para cada categoria, cria a seção com header e grid de cards
    categorias.forEach(catNome => {
      const itens = categoriaMap[catNome];
      const valores = itens.map(g => g.valorNum);
      const min = Math.min(...valores);
      const max = Math.max(...valores);
      const faixaPreco = min === max
        ? `R$ ${min}`
        : `R$ ${min} – R$ ${max}`;

      // Monta o HTML de cada card
      const cardsHTML = itens.map(gift => {
        // Estilo da imagem: cor de fundo + imagem (se existir)
        let imgStyle = `background-color: ${gift.cor};`;
        if (gift.imagem) {
          imgStyle += ` background-image: url('${gift.imagem}'); background-size: cover; background-position: center;`;
        }

        return `
            <div class="gift-card" data-gift-id="${gift.id}">
              <div class="gift-card-image" style="${imgStyle}">
                <div class="gift-card-action">
                  <button type="button" data-gift-id="${gift.id}">Presentear</button>
                </div>
              </div>
              <div class="gift-card-body">
                <p class="gift-card-country">${gift.pais}</p>
                <h4 class="gift-card-title">${gift.nome}</h4>
                <p class="gift-card-price">${gift.valor}</p>
              </div>
            </div>`;
      }).join('');

      // Monta a categoria completa
      const categoriaHTML = `
        <div class="gift-category fade-up">
          <div class="gift-category-header">
            <h3>${catNome}</h3>
            <span class="price-range">${faixaPreco}</span>
          </div>
          <div class="gifts-grid">
            ${cardsHTML}
          </div>
        </div>`;

      giftsContainer.insertAdjacentHTML('beforeend', categoriaHTML);
    });
  }


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

  // ---------- Parallax desativado: imagem dream exibe altura completa ----------

  // ---------- Navegação para a página de pagamento ----------
  // Usa delegação de eventos na seção de presentes para maior performance.
  const giftsSection = document.getElementById('presentes');

  if (giftsSection) {
    giftsSection.addEventListener('click', (e) => {
      // Verifica se o clique foi no card (.gift-card) ou no botão Presentear
      const card   = e.target.closest('.gift-card');
      const button = e.target.closest('.gift-card-action button');

      const source  = button || card;
      const giftId  = source ? source.dataset.giftId : null;

      if (giftId) {
        window.location.href = `pages/payment.html?id=${giftId}`;
      }
    });
  }

});

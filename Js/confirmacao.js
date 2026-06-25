/* ============================================
   Thais 40 Anos — Confirmação de Presença
   Configuração do WhatsApp + interações da página
   ============================================ */

(function () {

  // Número do WhatsApp (apenas números, com código do país)
  const WHATSAPP_NUMERO = '5522997065012';

  // Função que monta a mensagem com o nome da pessoa
  function buildMessage(nome) {
    return (
      'Oi, Thais! 💛✨\n\n' +
      'Eu, ' + nome + ', estou passando para confirmar minha presença no seu aniversário. ' +
      'Estou muito feliz por poder celebrar esse dia tão especial com você ' +
      'e mal posso esperar para comemorar juntos! 🥂🎉\n\n' +
      'Nos vemos em breve! 💕'
    );
  }

  // Função que monta a URL do WhatsApp
  function buildWhatsAppUrl(nome) {
    const msg = buildMessage(nome.trim());
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(msg)}`;
  }

  // ---------- Fluxo de confirmação em 2 etapas ----------
  const openBtn = document.getElementById('rsvpOpenBtn');
  const nameBox = document.getElementById('rsvpNameBox');
  const nameInput = document.getElementById('rsvpNameInput');
  const confirmBtn = document.getElementById('rsvpConfirmBtn');

  if (openBtn && nameBox && nameInput && confirmBtn) {

    // Etapa 1: Ao clicar no botão inicial, exibir caixa de nome
    openBtn.addEventListener('click', () => {
      openBtn.style.display = 'none';
      nameBox.classList.add('visible');
      // Foco automático no campo de nome
      setTimeout(() => nameInput.focus(), 350);
    });

    // Etapa 2: Habilitar/desabilitar botão conforme o campo de nome
    nameInput.addEventListener('input', () => {
      const nome = nameInput.value.trim();
      if (nome.length > 0) {
        confirmBtn.classList.remove('disabled');
        confirmBtn.href = buildWhatsAppUrl(nome);
      } else {
        confirmBtn.classList.add('disabled');
        confirmBtn.href = '#';
      }
    });

    // Bloquear clique se estiver desabilitado
    confirmBtn.addEventListener('click', (e) => {
      if (confirmBtn.classList.contains('disabled')) {
        e.preventDefault();
      }
    });
  }

  // ---------- Header scroll ----------
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ---------- Mobile menu ----------
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Fade-up animation ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
})();

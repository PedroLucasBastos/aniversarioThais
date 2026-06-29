/* ============================================
   Thais 40 Anos — Confirmação de Presença
   Configuração do WhatsApp + interações da página
   ============================================ */

(function () {

  // Número do WhatsApp (apenas números, com código do país)
  const WHATSAPP_NUMERO = '5521999131073';

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

  // ---------- Modal de confirmação ----------
  const openBtn = document.getElementById('rsvpOpenBtn');
  const modal = document.getElementById('rsvpModal');
  const closeBtn = document.getElementById('rsvpCloseBtn');
  const nameInput = document.getElementById('rsvpNameInput');
  const confirmBtn = document.getElementById('rsvpConfirmBtn');

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => nameInput.focus(), 350);
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    // Limpar campo e desabilitar botão
    nameInput.value = '';
    confirmBtn.classList.add('disabled');
    confirmBtn.href = '#';
  }

  if (openBtn && modal && closeBtn && nameInput && confirmBtn) {

    // Abrir modal ao clicar no botão
    openBtn.addEventListener('click', openModal);

    // Fechar ao clicar no X
    closeBtn.addEventListener('click', closeModal);

    // Fechar ao clicar fora do modal (no overlay)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Fechar com Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Habilitar/desabilitar botão conforme o campo de nome
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

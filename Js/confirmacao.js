/* ============================================
   Thais 40 Anos — Confirmação de Presença
   Configuração do WhatsApp + interações da página
   ============================================ */

(function () {

  // Número do WhatsApp (apenas números, com código do país)
  const WHATSAPP_NUMERO = '5522997065012';

  // 2. String limpa (sem caracteres invisíveis) e com quebras de linha ajustadas
  const WHATSAPP_MENSAGEM =
    'Oi, Thais! 💛✨\n\n' +
    'Passando para confirmar minha presença no seu aniversário. ' +
    'Estou muito feliz por poder celebrar esse dia tão especial com você ' +
    'e mal posso esperar para comemorar juntos! 🥂🎉\n\n' +
    'Nos vemos em breve! 💕';

  const btn = document.getElementById('rsvpBtn');
  if (btn) {
    // 3. Usando a API direta em vez do wa.me (mais estável para mobile)
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
    btn.href = url;
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

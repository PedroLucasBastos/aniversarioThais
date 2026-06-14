/* ============================================
   Thais 40 Anos — Página de Pagamento
   Lógica dinâmica: carrega o presente pelo ID
   da URL e gerencia a cópia do Pix.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- 1. Ler o ?id= da URL ----------
  const params  = new URLSearchParams(window.location.search);
  const giftId  = parseInt(params.get('id'), 10);

  // Buscar o presente no array global `gifts` (definido em gifts.js)
  const gift = (typeof gifts !== 'undefined') ? gifts.find(g => g.id === giftId) : null;

  // Se não encontrou, redireciona para a Home após breve mensagem
  if (!gift) {
    const main = document.getElementById('paymentMain');
    if (main) {
      main.innerHTML = `
        <div class="payment-error fade-up visible">
          <h2>Presente não encontrado</h2>
          <p>O presente que você está procurando não existe.<br>Volte à lista e escolha novamente.</p>
          <a href="../index.html#presentes" class="btn-primary">Ver todos os presentes</a>
        </div>`;
    }
    return;
  }

  // ---------- 2. Preencher título da aba ----------
  document.title = `${gift.nome} — Thaís 40`;

  // ---------- 3. Preencher conteúdo da página ----------
  _set('giftCountry',      gift.pais);
  _set('giftName',         gift.nome);
  _set('giftValue',        gift.valor);
  _set('giftDescription',  gift.descricao);

  // Imagem principal
  const imgEl     = document.getElementById('giftImage');
  const fallbackEl = document.getElementById('giftImageFallback');

  if (imgEl) {
    imgEl.alt = gift.nome;
    imgEl.src = `../${gift.imagem}`;
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
      if (fallbackEl) {
        fallbackEl.style.backgroundColor = gift.cor;
        fallbackEl.style.display = 'flex';
      }
    };
  }

  // QR Code
  const qrImg         = document.getElementById('qrCodeImg');
  const qrPlaceholder = document.getElementById('qrPlaceholder');

  if (qrImg) {
    qrImg.alt = `QR Code Pix - ${gift.nome}`;
    qrImg.src = `../${gift.qrCode}`;
    qrImg.onerror = () => {
      qrImg.style.display = 'none';
      if (qrPlaceholder) qrPlaceholder.style.display = 'flex';
    };
  }

  // ---------- 4. Botão Copiar Pix ----------
  const copyBtn = document.getElementById('copyPixBtn');
  const toast   = document.getElementById('pixToast');

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const pixCode = gift.pixCopiaECola;

      // Tentar copiar para a área de transferência
      try {
        await navigator.clipboard.writeText(pixCode);
      } catch (_) {
        // Fallback para navegadores sem suporte
        const textarea = document.createElement('textarea');
        textarea.value = pixCode;
        textarea.style.position = 'fixed';
        textarea.style.opacity  = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      // Feedback visual no botão
      const originalHTML = copyBtn.innerHTML;
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        Copiado com sucesso!`;

      // Exibir toast
      if (toast) {
        toast.classList.add('show');
      }

      // Reverter após 3 segundos
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalHTML;
        if (toast) toast.classList.remove('show');
      }, 3000);
    });
  }

  // ---------- 5. Header scroll effect ----------
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ---------- 6. Menu mobile ----------
  const mobileMenuBtn   = document.querySelector('.mobile-menu-btn');
  const mobileMenu      = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    mobileMenuClose?.addEventListener('click', () => {
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

});

// ---------- Helper: preenche texto de um elemento pelo id ----------
function _set(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

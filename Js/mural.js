/* ============================================
   Mural de Carinho — JavaScript
   Fetch, Render, Modal, Envio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Elementos ───
  const grid = document.getElementById('muralGrid');
  const loadingEl = document.getElementById('muralLoading');
  const emptyEl = document.getElementById('muralEmpty');
  const modalOverlay = document.getElementById('muralModal');
  const modalForm = document.getElementById('muralForm');
  const inputNome = document.getElementById('muralNome');
  const inputMensagem = document.getElementById('muralMensagem');
  const charCounter = document.getElementById('muralCharCounter');
  const btnSubmit = document.getElementById('muralSubmitBtn');
  const btnCancel = document.getElementById('muralCancelBtn');
  const btnClose = document.getElementById('muralCloseBtn');
  const btnCta = document.getElementById('muralCtaBtn');
  const btnFab = document.getElementById('muralFab');
  const toast = document.getElementById('muralToast');

  // API endpoint (Supabase REST)
  const SUPABASE_URL = 'https://lmcjyuwvnkdexgecpzbf.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxtY2p5dXd2bmtkZXhnZWNwemJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNTk1OTgsImV4cCI6MjA5ODgzNTU5OH0.4w07tc_qEtC0eDlumx872yhkDm4idPDTAZwh0C8I8w8';
  const API_URL = `${SUPABASE_URL}/rest/v1/Mensagens`;
  
  const headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  };

  // ─── Dados ───
  let mensagens = [];

  // ─── Carregar mensagens ───
  async function carregarMensagens() {
    showLoading(true);
    showEmpty(false);

    try {
      const res = await fetch(`${API_URL}?select=id,nome,mensagem,created_at&order=created_at.desc`, { headers });
      if (!res.ok) throw new Error('Erro ao buscar mensagens');

      mensagens = await res.json();
      renderCards();
    } catch (err) {
      console.error('Erro ao carregar mensagens:', err);
      showToast('Erro ao carregar mensagens. Tente novamente.', 'error');
    } finally {
      showLoading(false);
    }
  }

  // ─── Renderizar cards ───
  function renderCards() {
    grid.innerHTML = '';

    if (mensagens.length === 0) {
      showEmpty(true);
      return;
    }

    showEmpty(false);

    mensagens.forEach((msg, index) => {
      const card = criarCard(msg, index);
      grid.appendChild(card);
    });
  }

  function criarCard(msg, index) {
    const card = document.createElement('div');
    card.className = 'mural-card';

    // Mensagens mais longas ficam em destaque
    if (msg.mensagem.length > 100) {
      card.classList.add('featured');
    }

    // Delay escalonado para animação
    if (index < 6) {
      card.style.animationDelay = `${0.05 + index * 0.05}s`;
    }

    const inicial = msg.nome.charAt(0).toUpperCase();
    const dataFormatada = formatarData(msg.created_at);

    card.innerHTML = `
      <p class="mural-card-message">${escapeHtml(msg.mensagem)}</p>
      <div class="mural-card-footer">
        <div class="mural-card-avatar">${inicial}</div>
        <div class="mural-card-info">
          <p class="mural-card-name">${escapeHtml(msg.nome)}</p>
          <p class="mural-card-date">${dataFormatada}</p>
        </div>
      </div>
    `;

    return card;
  }

  // ─── Formatar data ───
  function formatarData(isoStr) {
    const data = new Date(isoStr);
    const opcoes = { day: '2-digit', month: 'long', year: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
  }

  // ─── Escapar HTML ───
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // ─── Loading / Empty ───
  function showLoading(show) {
    loadingEl.style.display = show ? 'block' : 'none';
    grid.style.display = show ? 'none' : 'block';
  }

  function showEmpty(show) {
    emptyEl.style.display = show ? 'block' : 'none';
  }

  // ─── Modal ───
  function abrirModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    inputNome.value = '';
    inputMensagem.value = '';
    atualizarContador();
    inputNome.focus();
  }

  function fecharModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    btnSubmit.classList.remove('loading');
    btnSubmit.disabled = false;
  }

  // Eventos de abertura
  if (btnCta) btnCta.addEventListener('click', abrirModal);
  if (btnFab) btnFab.addEventListener('click', abrirModal);

  // Eventos de fechamento
  if (btnCancel) btnCancel.addEventListener('click', fecharModal);
  if (btnClose) btnClose.addEventListener('click', fecharModal);

  // Fechar clicando fora
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) fecharModal();
    });
  }

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      fecharModal();
    }
  });

  // ─── Contador de caracteres ───
  const MAX_CHARS = 1000;

  function atualizarContador() {
    const count = inputMensagem.value.length;
    charCounter.textContent = `${count}/${MAX_CHARS}`;
    charCounter.classList.toggle('limit', count > MAX_CHARS * 0.9);
  }

  if (inputMensagem) {
    inputMensagem.addEventListener('input', atualizarContador);
  }

  // ─── Enviar mensagem ───
  if (modalForm) {
    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nome = inputNome.value.trim();
      const mensagem = inputMensagem.value.trim();

      // Validação
      if (!nome) {
        showToast('Por favor, informe seu nome.', 'error');
        inputNome.focus();
        return;
      }

      if (!mensagem) {
        showToast('Por favor, escreva uma mensagem.', 'error');
        inputMensagem.focus();
        return;
      }

      if (mensagem.length > MAX_CHARS) {
        showToast('A mensagem é muito longa. Reduza o texto.', 'error');
        return;
      }

      // Loading
      btnSubmit.classList.add('loading');
      btnSubmit.disabled = true;

      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ nome, mensagem }),
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || err.error || 'Erro ao enviar mensagem');
        }

        const data = await res.json();
        const novaMensagem = Array.isArray(data) ? data[0] : data;

        // Adiciona no topo
        mensagens.unshift(novaMensagem);
        renderCards();

        fecharModal();
        showToast('Mensagem enviada com carinho! 💛', 'success');

      } catch (err) {
        console.error('Erro ao enviar:', err);
        showToast(err.message || 'Erro ao enviar mensagem. Tente novamente.', 'error');
        btnSubmit.classList.remove('loading');
        btnSubmit.disabled = false;
      }
    });
  }

  // ─── Toast ───
  let toastTimeout;

  function showToast(message, type = 'success') {
    clearTimeout(toastTimeout);

    toast.textContent = message;
    toast.className = `mural-toast ${type}`;

    // Força reflow para reiniciar animação
    void toast.offsetWidth;
    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // ─── Header scroll effect ───
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ─── Mobile menu ───
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Inicializar ───
  carregarMensagens();

});

/**
 * ONG Esperança Viva - Script Principal
 * Funcionalidades: Menu Mobile, Cópia de Chave PIX com Toast, 
 * Máscaras de Formulário, Busca Automática de CEP (ViaCEP).
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNavLink();
  initPixCopy();
  initFormFeatures();
});

/* ==========================================================================
   SISTEMA DE TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  // Ícone de confirmação
  const iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  
  toast.innerHTML = `${iconSvg} <span>${message}</span>`;
  container.appendChild(toast);

  // Animação de entrada
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remoção automática após 3.5 segundos
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => {
      toast.remove();
    });
  }, 3500);
}

/* ==========================================================================
   MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mainNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !toggleBtn.contains(e.target)) {
      mainNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Fechar ao redimensionar para tela grande
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   DESTAQUE DO LINK ATIVO NA NAVEGAÇÃO
   ========================================================================== */
function initActiveNavLink() {
  const navLinks = document.querySelectorAll('.main-nav a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ==========================================================================
   CÓPIA DE CHAVE PIX
   ========================================================================== */
function initPixCopy() {
  const copyBtn = document.getElementById('copyPixBtn');
  const pixKeyElement = document.getElementById('pixKey');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const keyToCopy = pixKeyElement ? pixKeyElement.innerText.trim() : 'pix@esperancaviva.org';

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(keyToCopy);
      } else {
        // Fallback para ambientes legados ou arquivos locais (file://)
        const textarea = document.createElement('textarea');
        textarea.value = keyToCopy;
        textarea.style.position = 'fixed';
        textarea.style.left = '-999999px';
        textarea.style.top = '-999999px';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      // Feedback no próprio botão
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Chave Copiada!
      `;
      copyBtn.classList.remove('btn-primary');
      copyBtn.classList.add('btn-secondary');

      showToast('Chave PIX copiada! Muito obrigado pelo seu apoio.');

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove('btn-secondary');
        copyBtn.classList.add('btn-primary');
      }, 2500);

    } catch (err) {
      console.error('Erro ao copiar chave:', err);
      showToast('Não foi possível copiar automaticamente. Selecione o e-mail acima.');
    }
  });
}

/* ==========================================================================
   RECURSOS DO FORMULÁRIO DE CADASTRO
   ========================================================================== */
function initFormFeatures() {
  const form = document.querySelector('form');
  if (!form) return;

  const cpfInput = document.getElementById('cpf');
  const telInput = document.getElementById('telefone');
  const cepInput = document.getElementById('cep');
  const logradouroInput = document.getElementById('logradouro');
  const cidadeInput = document.getElementById('cidade');
  const estadoSelect = document.getElementById('estado');
  const numeroInput = document.getElementById('numero');
  const cepLoading = document.getElementById('cepLoading');

  // 1. Máscara de CPF: 000.000.000-00
  if (cpfInput) {
    cpfInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d)/, '$1.$2');
      v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      e.target.value = v;
    });
  }

  // 2. Máscara de Telefone: (00) 00000-0000 ou (00) 0000-0000
  if (telInput) {
    telInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.substring(0, 11);
      if (v.length > 10) {
        // Celular com 9 dígitos
        v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
      } else if (v.length > 5) {
        // Fixo ou digitando celular
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
      }
      e.target.value = v;
    });
  }

  // 3. Máscara de CEP e Busca Automática via ViaCEP
  if (cepInput) {
    cepInput.addEventListener('input', async (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 8) v = v.substring(0, 8);
      
      // Aplica formatação 00000-000
      if (v.length > 5) {
        e.target.value = v.replace(/^(\d{5})(\d{1,3})$/, '$1-$2');
      } else {
        e.target.value = v;
      }

      // Se completou 8 dígitos numéricos, busca na API do ViaCEP
      if (v.length === 8) {
        if (cepLoading) cepLoading.style.display = 'inline-flex';

        try {
          const response = await fetch(`https://viacep.com.br/ws/${v}/json/`);
          const data = await response.json();

          if (!data.erro) {
            if (logradouroInput) logradouroInput.value = data.logradouro || '';
            if (cidadeInput) cidadeInput.value = data.localidade || '';
            
            if (estadoSelect && data.uf) {
              // Verifica se a opção do estado existe ou cria
              let optionExists = false;
              for (let i = 0; i < estadoSelect.options.length; i++) {
                if (estadoSelect.options[i].value === data.uf) {
                  estadoSelect.selectedIndex = i;
                  optionExists = true;
                  break;
                }
              }
              if (!optionExists) {
                const newOption = new Option(data.uf, data.uf, true, true);
                estadoSelect.add(newOption);
              }
            }

            showToast(`Endereço encontrado: ${data.localidade} - ${data.uf}`);
            if (numeroInput) numeroInput.focus();
          } else {
            showToast('CEP não encontrado. Por favor, preencha manualmente.', 'warning');
          }
        } catch (error) {
          console.warn('Falha na consulta do ViaCEP:', error);
        } finally {
          if (cepLoading) cepLoading.style.display = 'none';
        }
      }
    });
  }

  // 4. Interceptação de Envio do Formulário para Feedback Amigável
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validação básica do formulário HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nome = document.getElementById('nome') ? document.getElementById('nome').value : 'Voluntário';

    // Simulação amigável de envio bem-sucedido
    showToast(`Obrigado, ${nome}! Sua inscrição como voluntário foi recebida com carinho.`);

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path>
        </svg>
        Enviando...
      `;
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Finalizar Inscrição';
      }
      // Mensagem de confirmação na tela
      alert(`Parabéns, ${nome}!\n\nRecebemos com muito carinho seu cadastro de voluntário na ONG Esperança Viva.\nNossa equipe entrará em contato em breve pelo telefone ou e-mail informado.\n\nJuntos podemos fazer mais! ❤️`);
    }, 1200);
  });
}

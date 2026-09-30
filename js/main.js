/* =========================================================
   SSG Review — основной JS
   ========================================================= */

/* ---------- 1. Drawer (бургер-меню) ---------- */
const burger = document.querySelector('[data-js="burger"]');
const drawer = document.querySelector('[data-js="drawer"]');

if (burger && drawer) {
  burger.addEventListener('click', () => drawer.show());
  drawer.querySelectorAll('.drawer__link').forEach(link => {
    link.addEventListener('click', () => drawer.hide());
  });
}

/* ---------- 2. Утилита: toast ---------- */
function showToast(message, variant = 'primary') {
  const icons = {
    success: 'check2-circle',
    danger: 'x-circle',
    warning: 'exclamation-triangle',
    primary: 'info-circle'
  };
  const alert = Object.assign(document.createElement('sl-alert'), {
    variant,
    closable: true,
    duration: 3000,
    innerHTML: `<sl-icon slot="icon" name="${icons[variant] || 'info-circle'}"></sl-icon>${message}`
  });
  document.body.append(alert);
  alert.toast();
}

/* ---------- 3. Форма подписки ---------- */
document.querySelectorAll('[data-js="subscribe-form"]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('sl-input[name="email"]');
    const agree = form.querySelector('sl-checkbox[name="agree"]');

    if (!email.value || !email.checkValidity()) {
      showToast('Проверьте email', 'danger');
      return;
    }
    if (!agree.checked) {
      showToast('Подтвердите согласие', 'warning');
      return;
    }
    showToast('Спасибо за подписку!', 'success');
    form.reset();
  });
});

/* ---------- 4. Форма контактов ---------- */
document.querySelectorAll('[data-js="contact-form"]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('sl-input[name="name"]');
    const email = form.querySelector('sl-input[name="email"]');
    const topic = form.querySelector('sl-select[name="topic"]');
    const message = form.querySelector('sl-textarea[name="message"]');
    const agree = form.querySelector('sl-checkbox[name="agree"]');

    if (!name.value) { showToast('Введите имя', 'danger'); return; }
    if (!email.value || !email.checkValidity()) { showToast('Проверьте email', 'danger'); return; }
    if (!topic.value) { showToast('Выберите тему', 'danger'); return; }
    if (!message.value) { showToast('Введите сообщение', 'danger'); return; }
    if (!agree.checked) { showToast('Подтвердите согласие', 'warning'); return; }

    showToast('Сообщение отправлено!', 'success');
    form.reset();
  });
});

/* ---------- 5. Модальные окна ---------- */
document.querySelectorAll('[data-js="open-modal"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-modal-id');
    document.getElementById(id)?.show();
  });
});

document.querySelectorAll('[data-js="close-modal"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('sl-dialog')?.hide();
  });
});

/* ---------- 6. Копирование кода ---------- */
document.querySelectorAll('[data-js="copy"]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const block = btn.closest('.code-block');
    const code = block.querySelector('code').innerText;

    try {
      await navigator.clipboard.writeText(code);
      const originalText = btn.textContent;
      btn.textContent = 'Скопировано!';
      btn.setAttribute('variant', 'success');
      setTimeout(() => {
        btn.textContent = originalText || 'Копировать';
        btn.setAttribute('variant', 'default');
      }, 2000);
    } catch (err) {
      showToast('Не удалось скопировать', 'danger');
    }
  });
});

/* ---------- 7. Подсветка активной ссылки в меню ---------- */
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.header__link').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('header__link_active');
  }
});

console.log(
  '%c SSG Review ',
  'background:#4f46e5;color:#fff;padding:4px 8px;border-radius:4px;',
  'Проект Буренковой П. А.'
);
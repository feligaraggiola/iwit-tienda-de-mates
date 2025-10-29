(() => {
  const requiredClasses = ['card', 'animar', 'btn', 'cons', 'section_consulta'];

  function checkRequiredClasses(list) { 
    const missing = list.filter(cls => !document.querySelector(`.${cls}`));
    return { ok: missing.length === 0, missing };
  }

    function ensureModal() {
    if (document.querySelector('.overlay')) return; 

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.right = 0;
    overlay.style.bottom = 0;
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.background = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = 9999;

    const modal = document.createElement('div');
    modal.className = 'card animar';
    modal.style.width = '320px';
    modal.style.height = '150px';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.backgroundColor = 'white';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 0 15px rgba(0,0,0,0.3)';

    const msg = document.createElement('p');
    msg.className = 'mensaje-modal';
    msg.style.textAlign = 'center';
    msg.textContent = '';
    modal.appendChild(msg);

    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar';
    btnCerrar.className = 'btn';
    btnCerrar.style.marginTop = '10px';
    btnCerrar.addEventListener('click', () => overlay.remove());
    modal.appendChild(btnCerrar);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
  }

  function showModal(text) { 
    ensureModal();
    const overlay = document.querySelector('.overlay');
    const msg = overlay.querySelector('.mensaje-modal');
    msg.textContent = text;
  }

  function init() {
    const check = checkRequiredClasses(requiredClasses);
    if (!check.ok) {
      alert('No se puede ejecutar JavaScript: faltan clases en el HTML/CSS (' + check.missing.join(', ') + ')');
      return;
    }

        const form = document.querySelector('.section_consulta .form_consulta');
    if (!form) return;

    form.addEventListener('submit', e => { 
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      showModal('Tu consulta fue enviada con éxito.');

      const inputs = form.querySelectorAll('.input');
      inputs.forEach(input => input.value = '');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
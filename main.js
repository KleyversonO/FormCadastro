const form = document.querySelector('.formLogin');
const emailInput = document.querySelector('.formLogin input[type="email"]');
const passwordInput = document.querySelector('.formLogin input[type="password"]');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert('Por favor, preencha os campos de e-mail e senha.');

    if (!email) {
      emailInput.focus();
    } else {
      passwordInput.focus();
    }
    return;
  }

  console.log('Formulário enviado com email:', email, 'e senha:', password);

  window.location.href = "logado.html";
});
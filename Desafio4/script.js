const formulario = document.getElementById('formulario-cta');
const inputEmail = document.getElementById('input-email');
const mensagemErro = document.getElementById('mensagem-erro');
const btnComecar = document.getElementById('btn-comecar');
const secaoCta = document.getElementById('cta');

btnComecar.addEventListener('click', function () {
  secaoCta.scrollIntoView({ behavior: 'smooth' });
});

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = inputEmail.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    mostrarErro('Digite um endereço de email');
    return;
  }

  if (!regexEmail.test(email)) {
    mostrarErro('Digite um endereço de email válido');
    return;
  }

  esconderErro();
  alert('Cadastro enviado com sucesso!');
  formulario.reset();
});

function mostrarErro(mensagem) {
  inputEmail.classList.add('invalido');
  mensagemErro.textContent = mensagem;
  mensagemErro.classList.add('mostrar');
}

function esconderErro() {
  inputEmail.classList.remove('invalido');
  mensagemErro.classList.remove('mostrar');
}
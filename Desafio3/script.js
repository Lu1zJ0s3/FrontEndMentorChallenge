document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('botao1');

  if (!botao) {
    console.error('Elemento #botao1 não encontrado');
    return;
  }

  botao.addEventListener('click', () => {
    alert('Botão clicado!');
  });
});

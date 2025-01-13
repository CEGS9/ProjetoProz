document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
      });
    });
  });
  
  document.querySelector('button a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });


const containerElement = document.querySelector('.container');

document.addEventListener('click', () => {
  containerElement.classList.add('hidden');
});

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
  containerElement.remove();
  }
});
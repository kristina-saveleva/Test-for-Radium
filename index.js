const containerElement = document.querySelector('.container');

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      containerElement.remove();
    }
  });

containerElement.addEventListener('click', () => {
    containerElement.classList.add('hidden');
});
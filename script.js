document.getElementById('yesButton').addEventListener('click', function() {
  document.querySelector('.container').classList.add('hidden');
  document.getElementById('yesMessage').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
  const button = document.getElementById('noButton');
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
  button.style.position = 'absolute';
});

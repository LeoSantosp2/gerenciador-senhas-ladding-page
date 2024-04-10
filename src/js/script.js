const btnClose = document.getElementById('btn-close');
const btnOpen = document.getElementById('btn-open');
const header = document.getElementById('header');

btnOpen.addEventListener('click', () => {
  header.style.left = '0%';
});

btnClose.addEventListener('click', () => {
  header.style.left = '-100%';
});

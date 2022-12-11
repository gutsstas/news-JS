import './global.css';

const menuBtn = document.querySelectorAll('.burger')[0];
const menu = document.querySelectorAll('.sources.buttons')[0];
const menuBackground = document.querySelectorAll('.burger_background')[0];
const close = document.querySelectorAll('.close')[0];

menuBtn.addEventListener('click', (): void => {
  menuBtn.classList.add('burger__active');
  menu.classList.add('menuTrue');
  menuBackground.classList.add('background-true');
  close.classList.add('close__active');
});

menuBackground.addEventListener('click', (): void => {
  menu.classList.remove('menuTrue');
  menuBackground.classList.remove('background-true');
  close.classList.remove('close__active');
  menuBtn.classList.remove('burger__active');
});

close.addEventListener('click', (): void => {
  menu.classList.remove('menuTrue');
  menuBackground.classList.remove('background-true');
  close.classList.remove('close__active');
  menuBtn.classList.remove('burger__active');
});

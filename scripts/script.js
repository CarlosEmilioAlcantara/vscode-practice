const toggle = document.querySelector('.toggle__menu');
const header = document.querySelector('.header');
const menu = document.querySelector('.header__nav__links');
const dl = document.querySelector('.header__dropdown__dl');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    header.classList.toggle('open');
    menu.classList.toggle('open');
    dl.classList.toggle('open');
});
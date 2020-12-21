const images = document.querySelectorAll('.article__image');
const text = document.querySelectorAll('.article__content');
const title = document.querySelector('.header__title');
const slogan = document.querySelector('.header__slogan');
addModifier([images, text], '--into-view');
addModifier([title, slogan], '--into-view', 1);
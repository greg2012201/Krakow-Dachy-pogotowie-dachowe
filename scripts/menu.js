/* MENU */
const burger = document.querySelector('.burger');
const dropDownMenu = document.querySelector('.menu');

let menuIsOpen = false;
const openMenu = function () {
    menuIsOpen = true;

    dropDownMenu.classList.toggle('menu--open');

};
const burgerClassToggle = function () {
    burger.classList.toggle('burger--active');
}
const activateBurger = function () {
    burgerClassToggle();
    openMenu();
};
burger.addEventListener('click', activateBurger);

const closeWhenClickOutOfMenu = function (e) {


    if (menuIsOpen) {

        return menuIsOpen = false;
    } else if (dropDownMenu.classList.contains('menu--open') && !menuIsOpen) {
        burgerClassToggle();
        openMenu();
    }

};
document.addEventListener('click', closeWhenClickOutOfMenu);


console.log(window.onscroll);
/* const hideNavBar = function(){}; */

/* SCROLL TO */

const sections = document.querySelectorAll('.section');
const smoothScroll = (link, duration) => {

    const targetPosition = document.querySelector(`.${link}`).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);

    }

    const ease = (t, b, c, d) => {

        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;

    }

    requestAnimationFrame(animation)
}

const navBtns = document.querySelectorAll('.menu__link').forEach(btn => btn.addEventListener('click', function (e) {
    const link = this.dataset.destination;

    e.preventDefault();
    smoothScroll(link, 1000);
}));
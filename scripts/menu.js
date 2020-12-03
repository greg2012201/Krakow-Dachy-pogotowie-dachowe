/* MENU */
const sections = [...document.querySelectorAll('.section')];
const burger = document.querySelector('.burger');
const dropDownMenu = document.querySelector('.menu');
const navBar = document.querySelector('.menu__nav-bar');

let menuIsOpen = false;
let isMenuOpen;
const openMenu = () => {
    menuIsOpen = true;

    dropDownMenu.classList.toggle('menu--open');

    isMenuOpen = () => menuIsOpen = true;

};
const burgerClassToggle = () => {
    burger.classList.toggle('burger--active');
}
const activateBurger = () => {
    burgerClassToggle();
    openMenu();
};
burger.addEventListener('click', activateBurger);

const closeWhenClickOutOfMenu = () => {


    if (menuIsOpen) {

        return menuIsOpen = false;
    } else if (dropDownMenu.classList.contains('menu--open') && !menuIsOpen) {
        burgerClassToggle();
        openMenu();
    }

};
document.addEventListener('click', closeWhenClickOutOfMenu);
/* HIDE MENU */
const menu = document.querySelector('.menu');
let startPagePosition = window.pageYOffset;
const hideMenu = () => {

    /* if (isMenuOpen ? isMenuOpen() : false) */
    menu.classList.add('menu--hidden');


}
const showMenu = () => {
    menu.classList.remove('menu--hidden');

}
const autoHideMenu = () => {
    let currentPagePosition = window.pageYOffset;

    let sectionsPosition = sections.find(element =>
        output = element.offsetTop === parseInt(currentPagePosition.toFixed()));
    // tutuaj trzeba uniwersalną metodę napisać bo jest użyta już 2 razy

    if (sectionsPosition) {
        hideMenu();
    } else if (currentPagePosition < startPagePosition) {
        showMenu();
    } else hideMenu();

    startPagePosition = currentPagePosition;
}
document.addEventListener('scroll', autoHideMenu);
/* SHOW MENU  */


const mouseOver = (e) => {



    const navBarHeight = navBar.getBoundingClientRect().height;
    if (e.clientY <= navBarHeight) showMenu();
    /* else hideMenu(); */
}
document.addEventListener('mousemove', mouseOver)


/* SCROLL TO */
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

const navBtns = document.querySelectorAll('.menu__link, .logo').forEach(btn => btn.addEventListener('click', function (e) {
    const link = this.dataset.destination;

    e.preventDefault();
    smoothScroll(link, 1000);
}));
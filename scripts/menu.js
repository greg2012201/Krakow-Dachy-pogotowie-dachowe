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

    const childs = [...dropDownMenu.querySelectorAll('*')];
    const isChild = childs.find(element => element === e.target)
    if (menuIsOpen || isChild) {

        return menuIsOpen = false;
    } else if (dropDownMenu.classList.contains('menu--open') && !menuIsOpen) {
        burgerClassToggle();
        openMenu();
    }

};
document.addEventListener('click', closeWhenClickOutOfMenu);
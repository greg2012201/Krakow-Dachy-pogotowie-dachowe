const burger = document.querySelector('.burger');
const dropDownMenu = document.querySelector('.menu');

let menuIsOpen = false;
/* 
let whereClicked;
const whereIsClick = (e) => {
    whereClicked = e.target;
}
// TREBA DAĆ FUNCKJĘ WHERE I CLICKED I DO ACTIVATE TO DAĆ FUNKCJA TA MA ZWRÓCIĆ E.TARGET 
document.addEventListener('click', whereIsClick); */

const toggle = function (e) {
    menuIsOpen = true;
    e.classList.toggle('burger--active');



    dropDownMenu.classList.toggle('menu--droped');



};
let isDroped = false;
const active = function (e) {

    toggle(this);
    isDroped = true



};



burger.addEventListener('click', active);

;

const closeWhenClickOutOfMenu = function (e) {

    const childs = [...dropDownMenu.querySelectorAll('*')];

    const isChild = childs.find(element => element === e.target)
    console.log(isChild);


    if (menuIsOpen || isChild) {

        return menuIsOpen = false;
    } else if (dropDownMenu.classList.contains('menu--droped') && !menuIsOpen) {

        toggle(burger);
    }

};
document.addEventListener('click', closeWhenClickOutOfMenu)
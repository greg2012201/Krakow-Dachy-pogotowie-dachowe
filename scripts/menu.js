const burger = document.querySelector('.burger');
const dropDownMenu = document.querySelector('.menu');

const activate = function () {

    this.classList.toggle('burger--active');
    dropDownMenu.classList.toggle('menu--droped');

}

burger.addEventListener('click', activate);
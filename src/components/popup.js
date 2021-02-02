const popup = document.querySelector('.popup');
const link = document.querySelector('.form__checkbox--link');
const popupBtn = document.querySelector('.popup__button');
let isOpen = false;



const closeWhenClickOutOfPopup = (e) => {


    if (e.target !== popup && e.target.parentNode !== popup && isOpen && e.target !== link)

    {
        popupManage();

    }


}

window.addEventListener('click', (e) => closeWhenClickOutOfPopup(e));

const popupManage = (e) => {
    if (e) {
        e.preventDefault();
    }
    if (!isOpen) {
        open();
    } else {
        close();
    }



}
const close = () => {
    popup.classList.remove('popup--active');
    isOpen = false;

}


const open = () => {
    popup.classList.add('popup--active');
    isOpen = true;
}


link.addEventListener('click', (e) => popupManage(e));
popupBtn.addEventListener('click', close);
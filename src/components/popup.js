import {
    getElementPosition
} from '../tools/getElementPosition'


const popup = document.querySelector('.popup');
const link = document.querySelector('.form__checkbox--link');
const popupBtn = document.querySelector('.popup__button');
let isOpen = false;


/* POPUP OPEN/CLOSE */

const closeWhenClickOutOfPopup = (e) => {


    if (e.target !== popup && e.target.parentNode !== popup && isOpen && e.target !== link) {
        return popupManage();
    }
}
window.addEventListener('click', (e) => closeWhenClickOutOfPopup(e));
const getPopupPosition = () => {
    return {
        height: getElementPosition(popup).height,
        top: getElementPosition(popup).top,
        bottom: getElementPosition(popup).bottom,
    }

}
const getLinkPosition = () => {

    return {
        top: getElementPosition(link).top,
        bottom: getElementPosition(link).bottom,
    }

}

const popupManage = () => {


    const popupHeight = getPopupPosition().height;
    const linkPosition = getLinkPosition();
    const up = linkPosition.top - popupHeight <= 0;
    const down = innerHeight - (linkPosition.bottom - popupHeight) <= 0;


    if (!isOpen) {
        popupActive();
        if (up) {
            openDown();

        } else if (down) {
            openUp();
            closeDown();
        } else {
            openUp();

        }

    } else {
        console.log(isOpen);
        closeUp();
        closeDown();
        popupDisactive();

    }




}
document.addEventListener('scroll', () => {


    const popupPosition = getPopupPosition();
    const up = popupPosition.top <= 0;
    const down = innerHeight - popupPosition.bottom <= 0;

    if (isOpen) {
        if (up) {
            openDown();
            closeUp();

        } else if (down) {
            openUp();
            closeDown();
        }


    }
});

const popupActive = () => {
    isOpen = true;
    popup.classList.add('popup--active');
}
const popupDisactive = () => {
    isOpen = false;
    popup.classList.remove('popup--active');
    closeUp();
    closeDown();
}

const closeUp = () => {

    popup.classList.remove('popup--up');
}
const closeDown = () => {

    popup.classList.remove('popup--down');
}


const openUp = () => {

    popup.classList.add('popup--up');
}
const openDown = () => {

    popup.classList.add('popup--down');
}

link.addEventListener('click', (e) => {
    e.preventDefault();
    popupManage();
});
popupBtn.addEventListener('click', popupDisactive);
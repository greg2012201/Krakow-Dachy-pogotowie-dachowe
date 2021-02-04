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
const popupManage = () => {


    const popupHeight = getElementPosition(popup).height;
    const linkPosition = getElementPosition(link);
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
        closeUp();
        closeDown();
        popupDisactive();

    }




};

const popupActive = () => {
    isOpen = true;
    popup.classList.add('popup--active');
    document.addEventListener('scroll', createEvent);
}
const popupDisactive = () => {
    isOpen = false;
    popup.classList.remove('popup--active');
    document.removeEventListener('scroll', createEvent);
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


/* events for scroll */

const dispatch = (events) => {
    const popupPosition = getElementPosition(popup);
    const up = popupPosition.top <= 0;
    const down = innerHeight - popupPosition.bottom <= 0;
    const {
        eventUp,
        eventDown,
    } = events


    if (up) {
        document.dispatchEvent(eventUp);
    } else if (down) {
        document.dispatchEvent(eventDown);
    }
}


const createEvent = () => {
    dispatch({
        eventUp: new Event('popupUp'),
        eventDown: new Event('popupDown'),
    });

}


document.addEventListener('popupUp', () => {
    closeUp();
    closeDown();
    openDown();
});
document.addEventListener('popupDown', () => {
    closeDown();
    closeUp();
    openUp();
});
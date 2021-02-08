import {
    getElementPosition
} from '../tools/getElementPosition'


const popup = document.querySelector('.popup');
const link = document.querySelector('.form__checkbox--link');
const popupBtn = document.querySelector('.popup__button');
let initialized = false;




/* POPUP OPEN/CLOSE */
const init = () => {




    if (!initialized) {

        popupActive();

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

        createEvent();




        window.addEventListener('click', (e) => closeWhenClickOutOfPopup(e));
        popupBtn.addEventListener('click', popupDisactive);

    } else {
        popupDisactive();
        document.removeEventListener('scroll', createEvent);
    }

}

const closeWhenClickOutOfPopup = (e) => {
    const clickOutOfPopup = e.target !== popup && e.target.parentNode !== popup && initialized && e.target !== link;

    if (clickOutOfPopup) {
        return popupDisactive();
    }
}



const popupActive = () => {
    initialized = true;
    popup.classList.add('popup--active');
    openUp();


}
const popupDisactive = () => {
    initialized = false;
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





/* events for scroll */

const dispatch = (events) => {
    const popupPosition = getElementPosition(popup);
    const linkPosition = getElementPosition(link);
    const up = popupPosition.top <= 0;
    const down = innerHeight - popupPosition.bottom <= 0;

    const isEnouthSpaceOnBottom = innerHeight >= (linkPosition.bottom + popupPosition.height + 24);
    const isEnouthSpaceOnTop = innerHeight <= (linkPosition.top + popupPosition.height + 24);

    const {
        eventUp,
        eventDown,
    } = events

    if (up && isEnouthSpaceOnBottom) {
        document.dispatchEvent(eventUp);
    } else if (down && isEnouthSpaceOnTop) {
        document.dispatchEvent(eventDown);
    }
}


const createEvent = () => {


    const events = {
        eventUp: new Event('popupUp'),
        eventDown: new Event('popupDown'),
    }
    document.addEventListener('scroll', () => {
        dispatch(events);
    });

    dispatch(events);
}

link.addEventListener('click', (e) => {
    e.preventDefault();

    init();
});
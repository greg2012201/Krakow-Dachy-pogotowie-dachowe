import {
    addModifier
} from './get-element-in-sight'; // get musi zwracać i to co zwróci musi wrzucać do add modifier osobno
import {
    animationStopperInit
} from './resize-animation-stopper';

// może dodaj tutaj domcontent loaded 
// DODAĆ OBSŁUGĘ GDY COŚ JEST NULL I NIE CHWYCONE PRZEZ QUERY SELECTOR
const images = document.querySelectorAll('.article__image');
const text = document.querySelectorAll('.article__content');
const title = document.querySelector('.header__title');
const slogan = document.querySelector('.header__slogan');
const page = document.querySelector('.page');
animationStopperInit(page);
addModifier([images, text], '--into-view');
addModifier([title, slogan], '--into-view', 1);
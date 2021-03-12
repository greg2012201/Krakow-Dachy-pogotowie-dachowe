const smoothScroll = require('smooth-desktop-mobile-scroll');
import {
    addModifier
} from './get-element-in-sight';
import {
    animationStopperInit
} from './resize-animation-stopper';

const images = document.querySelectorAll('.article__image');
const text = document.querySelectorAll('.article__content');
const title = document.querySelector('.slogan__title');
const motto = document.querySelector('.slogan__motto');
const page = document.querySelector('.page');;

const desktopScroll = {
    duration: '1000ms',
    ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
}
const mobileScroll = {
    duration: '0ms',
    ease: 'linear',
}

const desktopVieport = 1281;

animationStopperInit(page);
addModifier([images, text], '--into-view');
addModifier([title, motto], '--into-view', 1);
if (innerWidth > desktopVieport) {
    smoothScroll.smoothScrollInit(desktopScroll.duration, desktopScroll.ease);
} else {
    smoothScroll.smoothScrollInit(mobileScroll.duration, mobileScroll.ease);
}
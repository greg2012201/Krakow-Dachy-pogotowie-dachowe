const smoothScroll = require('smooth-desktop-mobile-scroll');
import {
    addModifier
} from './get-element-in-sight';
import {
    animationStopperInit
} from './resize-animation-stopper';

const images = document.querySelectorAll('.article__image');
const text = document.querySelectorAll('.article__content');
const title = document.querySelector('.header__title');
const slogan = document.querySelector('.header__slogan');
const page = document.querySelector('.page');

const scrollAnimationDuration = '1000ms';
const scrollAnimationTimingFunction = 'cubic-bezier(0.23, 1, 0.32, 1)';

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
addModifier([title, slogan], '--into-view', 1);
if (innerWidth > desktopVieport) {
    smoothScroll.smoothScrollInit(desktopScroll.duration, desktopScroll.ease);
} else {
    smoothScroll.smoothScrollInit(mobileScroll.duration, mobileScroll.ease);
}
import {
    smoothScroll
} from './smoothScroll'
const page = document.querySelector('html');
const container = document.querySelector('.smooth-scroll-container');











const scrollManage = () => {} // tutaj będziemy walidować zmiany
export const smoothScrollOnMouseWheelInit = (e) => {


    let cache = 0;
    let eventCache = 1;
    let active = false;
    let distance = 0;
    let target = 0;
    let moving = false;
    let wheelMoveCount = 0;
    let initialPosition = window.scrollY;


    document.addEventListener('wheel', (e) => {
        console.log(moving);
        wheelMoveCount++
        const delta = e.deltaY;
        console.log(delta);
        eventCache++;
        initialPosition = window.scrollY
        wheelMovesCache(delta)
        distance = cache / 2;
        move(distance);
        //jeżeli moving jest true to tylko inkrementujemy cache ale nie wywołujemy distance ? 
    });


    document.addEventListener('scroll', () => {

        console.log(initialPosition);
        moving = true;

        const scrollTarget = initialPosition + distance;
        const actualPosition = window.scrollY;

        if (Math.round(scrollTarget) == Math.round(actualPosition)) {
            console.log('stop' + distance);


            moving = false;

            cache = 0;
            wheelMoveCount = 0;


        }

    });







    // throttle
    const wheelMovesCache = (delta) => {
        distance = window.scrollY;
        const pageHeight = page.getBoundingClientRect().height;

        cache += delta;

        clearMovesCache();
    }
    const clearMovesCache = () => {



        /*  if (cache >= window.innerHeight) {

             return cache = window.innerHeight;
         } */
        /* setTimeout(() => {

            cache = 0;

        }, 1000); */


    }

    const move = (distance) => {

        const scrollTarget = window.scrollY + distance;

        /* console.log(`scrollTarget ${scrollTarget}`); */

        smoothScroll(Math.round(scrollTarget), 400);

    }
}
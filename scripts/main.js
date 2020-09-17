/* document.querySelector('.about').addEventListener('click', () => {
    setTimeout(() =>
        document.querySelector('p').scrollIntoView({
            behavior: 'smooth'
        }), 2000)
}); */

// przykłady https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery

//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame - dobra rzecz do użycia ws animacji 

// znaleźć pozycję elementu do którego będzie się scrolować 
// trzeba znaleźć range odległośc ile jest od góry do punktu

// na zdjęcia w galerii dodajemy powiększanie lekkie po :hover tak jak w projekcie z samurajem 

/* console.log(document.documentElement.scrollLeft);
console.log(window.pageYOffset); */
const p = document.querySelector('p');

const move = () => { // spoko funkcja na przsuwanie
    let px = 1; // to powinno w miare działać
    let speed = 4;






    let intervalIndex = setInterval((e) => { // można napsać funkcję która przeszukuje pixel po pixelu albo odwrócić obliczenie z windows scrol

            window.scroll(0, px += speed);
            // trzeba ustalić dokładną pozycję znaleźć metodę która odszukuje czy w polu widzenia znajduje się element
            console.log(px);
            /* console.log(speed); */
            // ogónie napisać to bardziej przejrzyście może w classie ? 
            let distance = (Math.round(p.offsetTop)) - (Math.round(window.scrollY))
            let pPosition = (Math.round(p.offsetTop));
            let scrollYPosition = (Math.round(window.scrollY) - 1)
            /*   console.log(pPosition);
              console.log(scrollYPosition); */
            console.log(distance);

            if ( /* pPosition == scrollYPosition */ distance <= 0) /* console.log('działa'); */ stopMoving(intervalIndex)
        },
        1)
    // trzeba jeszcze dodać usunięcie linka
    console.log(p.offsetTop);

    /* return intervalIndex */


}
document.querySelector('.about').addEventListener('click', move);


const stopMoving = (intervalIndex) => {

    clearInterval(intervalIndex)





}
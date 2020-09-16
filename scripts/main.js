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
    let px = 1;
    /* let speed */
    let y = window.scrollY;
    let elementPosition = p.offsetLeft;



    let intervalIndex = setInterval((e) => { // można napsać funkcję która przeszukuje pixel po pixelu albo odwrócić obliczenie z windows scrol
        window.scroll(0, px += 5);
        console.log(Math.round(window.scrollY)); // trzeba ustalić dokładną pozycję znaleźć metodę która odszukuje czy w polu widzenia znajduje się element
        console.log(Math.round(p.offsetTop));


    }, 10)


    /* return intervalIndex */


}
document.querySelector('.about').addEventListener('click', move);


const stopMoving = () => {



    if (p.offsetleft == window.screenY - 200) console.log('ok');



}
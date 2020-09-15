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

console.log(document.documentElement.scrollLeft);
console.log(window.pageYOffset);
const p = document.querySelector('p');

const move = () => { // spoko funkcja na przsuwanie
    let px = 0.1;
    /* let speed */


    let intervalIndex = setInterval((index) => {
        window.scroll(0, px++), 100000;
        console.log(window.scrollY); // trzeba użyć zaokrąglenia
        console.log(p.offsetLeft);
        stopMoving()
    })


    return intervalIndex


}
document.querySelector('.about').addEventListener('click', move);


const stopMoving = () => {



    if (p.offsetleft == window.screenY - 200) console.log('ok');



}
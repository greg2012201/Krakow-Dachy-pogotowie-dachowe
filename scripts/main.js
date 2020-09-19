const p = document.querySelectorAll('p'); //funkcja musi być uniwersalna dla przewijania w górę i w dół jeszcze to ogarnąć

const navBtns = document.querySelectorAll('a');

let px = 1; // zasięg globalny żeby się px się zapisywało a nie aktualizowało  z każdym przyciśnięciem w  navie 

const move = (e, obj) => {
    e.preventDefault();





    /*   elementsData.forEach(element => console.log(element.dataset)); */


    scrollFinish = document.querySelector(`p[data-set = "${e.target.dataset.set}"]`).offsetTop;



    let speed = 1;




    let intervalIndex = setInterval(() => {

        /* console.log(px); */
        /* window.scroll(0, px += speed); */
        // zrobić tak że if position większa niż px to wtedy += speed
        // if position mniejsza niż px to wtedy -= speed
        /* console.log(Math.round(scrollFinish)); */

        let distance = (Math.round(scrollFinish)) - (Math.round(window.scrollY)); // zastanowić się czy zaokrąglenie jest tutaj potrzebne
        let pPosition = (Math.round(scrollFinish));

        console.log(distance);


        if (scrollFinish > px) {

            speed++
            window.scroll(0, px += speed);
            if (distance <= 0) {

            }

        } else if (scrollFinish < px) {

            speed++
            window.scroll(0, px -= speed);
        }


        if (distance < 0) {



            window.scrollTo(0, pPosition);
        }

        if ((Math.round(window.scrollY)) == (Math.round(scrollFinish))) stopMoving(intervalIndex);
        // trzeba jakoś obliczyć odległość od pozycji okna do elementu docelowego

    }, 10);




}
/* document.querySelector('.about').addEventListener('click', move); */

navBtns.forEach(btn => btn.addEventListener('click', move));


const stopMoving = (intervalIndex) => {

    clearInterval(intervalIndex);





}
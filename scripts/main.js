const p = document.querySelector('p'); //funkcja musi być uniwersalna dla przewijania w górę i w dół jeszcze to ogarnąć

const move = (e) => {
    let px = 1;
    let speed = 1;

    e.preventDefault()

    let intervalIndex = setInterval(() => {
        speed++
        window.scroll(0, px += speed);


        let distance = (Math.round(p.offsetTop)) - (Math.round(window.scrollY))
        let pPosition = (Math.round(p.offsetTop));
        let scrollYPosition = (Math.round(window.scrollY) - 1)



        if (distance <= 0) {

            window.scrollTo(0, pPosition)
            stopMoving(intervalIndex)
        }
    }, 10)




}
document.querySelector('.about').addEventListener('click', move);


const stopMoving = (intervalIndex) => {

    clearInterval(intervalIndex)





}
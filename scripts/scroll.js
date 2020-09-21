const p = document.querySelectorAll('p'); //funkcja musi być uniwersalna dla przewijania w górę i w dół jeszcze to ogarnąć




function smoothScroll(e, duration) {


    const href = this.getAttribute('href');
    const targetPosition = document.querySelector(href).offsetTop;
    console.log(offset);
    e.preventDefault();



    const startPosition = window.pageYOffset;
    const distance = startPosition - targetPosition;
    const startTime = null;

    const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(o, run);
        if (timeElapsed < duration) requestAnimationFrame(aniamtion);

    }

    const ease = (t, b, c, d) => {

        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;

    }

    requestAnimationFrame(animation)
}




const navBtns = document.querySelectorAll('a').forEach(btn => btn.addEventListener('click', smoothScroll(element, 1000))); // trzeba to dokończyć żeby przekazywało do środka hrefa
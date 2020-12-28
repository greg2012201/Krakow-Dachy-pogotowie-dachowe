const page = document.querySelector('.page');
let resizeTimer;

window.addEventListener('resize', () => {
    page.classList.add('page--resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        page.classList.remove('page--resize-animation-stopper');
    }, 400);


});
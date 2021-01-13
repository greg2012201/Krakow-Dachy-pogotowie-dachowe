export const animationStopperInit = (page) => {
    let _resizeTimer;
    window.addEventListener('resize', () => {
        page.classList.add('page--resize-animation-stopper');
        clearTimeout(_resizeTimer);
        _resizeTimer = setTimeout(() => {
            page.classList.remove('page--resize-animation-stopper');
        }, 400);


    });
}
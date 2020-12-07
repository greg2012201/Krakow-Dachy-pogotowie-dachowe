const detectAndChangeClassOfElement = (elements) => {
    const vieportHeight = window.innerHeight;
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        top - vieportHeight <= 0 && bottom >= 0 ? element.classList.add('--into-view') : element.classList.remove('--into-view');
    });


};
const setElementsToView = (elements) => {

    return window.addEventListener('scroll', () => detectAndChangeClassOfElement(elements));
};
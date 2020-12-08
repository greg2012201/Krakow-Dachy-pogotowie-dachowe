const detectAndChangeClassOfElement = (elements, modifier) => {
    const vieportHeight = window.innerHeight;
    elements.forEach(element => {

        const rect = element.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        top - vieportHeight <= 0 && bottom >= 0 ? setClass(element, modifier) : removeClass(element, modifier);
    });

};
const getClass = (element, index) => element.classList.item(index);
const setClass = (element, modifier) => element.classList.add(`${getClass(element, 0)}${modifier}`);

const removeClass = (element, modifier) => {
    element.classList.remove(`${getClass(element, 0)}${modifier}`);
}
const setElementsToView = (elements, modifier) => {
    return window.addEventListener('scroll', () => detectAndChangeClassOfElement(elements, modifier));
};
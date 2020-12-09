const detectAndChangeClassOfElement = (elements, modifier) => {



    const vieportHeight = window.innerHeight;
    let arr;
    elements.map(element => [...element]).sort((a, b) => arr = a.concat(b));
    arr.forEach(element => {
        console.log(element);
        const rect = element.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        top - vieportHeight <= 0 && bottom >= 0 ? setModifier(element, modifier) : removeModifier(element, modifier);
    });

};
const getClass = (element, index) => element.classList.item(index);
const setModifier = (element, modifier) => element.classList.add(`${getClass(element, 0)}${modifier}`);

const removeModifier = (element, modifier) => {
    element.classList.remove(`${getClass(element, 0)}${modifier}`);
}
const addModifier = (elements, modifier) => {
    return window.addEventListener('scroll', () => detectAndChangeClassOfElement(elements, modifier));
};
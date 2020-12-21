const getElementToAddModifier = (elements, modifier, toggle = -1) => {

    let arr;
    if (elements.find(element => element instanceof HTMLElement))
        return modifierManage(elements, modifier, toggle)
    else
        elements.map(element => [...element]).sort((a, b) => {
            arr = a.concat(b)
        });


    return modifierManage(arr, modifier, toggle)
};
const modifierManage = (elements, modifier, toggle) => {
    elements.forEach(element => {
        if (isInView(getParameters(element))) setModifier(element, modifier);
        else if (toggle > 0) removeModifier(element, modifier);
    });
};
const getParameters = (element) => {
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        bottom: rect.bottom,
        vieportHeight: window.innerHeight,
    };
};

const isInView = ({
    top,
    bottom,
    vieportHeight,
} = parameters) => top - vieportHeight <= 0 && bottom >= 0;


const getClass = (element, index) => element.classList.item(index);
const setModifier = (element, modifier) => element.classList.add(`${getClass(element, 0)}${modifier}`);

const removeModifier = (element, modifier) => {
    element.classList.remove(`${getClass(element, 0)}${modifier}`);
};
const addModifier = (elements, modifier, toggle) => {
    const init = () => getElementToAddModifier(elements, modifier, toggle)

    document.addEventListener('DOMContentLoaded', init);
    window.addEventListener('scroll', init);

};
const detectAndChangeClassOfElement = (elements) => {
    const vieportHeight = window.innerHeight;
    elements.forEach(element => {
        const classOfElement = `${getClass(element)}--into-view`;
        console.log(classOfElement);
        const rect = element.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;
        console.log(bottom);
        top - vieportHeight <= 0 && bottom >= 0 ? element.classList.add(classOfElement) : element.classList.remove(classOfElement);
    });




};
const getClass = (element) => element.classList.item(0);
const setElementsToView = (elements) => {

    return window.addEventListener('scroll', () => detectAndChangeClassOfElement(elements));
};

setElementsToView(sections)
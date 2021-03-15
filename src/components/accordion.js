const button = document.querySelectorAll('.accordion__button');
const accordions = document.querySelectorAll('.accordion');

const setDataset = () => {


    accordions.forEach((wrapp, i) => {
        wrapp.dataset.key = i;
        wrapp.firstElementChild.dataset.key = i;

    });

}
setDataset();

const getDefaultListWrapperHeight = () => {
    const output = [];
    accordions.forEach(wrapp =>
        output.push(wrapp.offsetHeight));


    return output


}
const rootHeight = getDefaultListWrapperHeight();

button.forEach(btn => btn.addEventListener('click', (e) => {
    const parent = e.target.parentNode;

    if (parent.dataset.key === e.target.dataset.key) {

        e.target.classList.toggle('accordion__button--active')
        const containerHeight = parent.getBoundingClientRect().height;
        let listHeight;
        let btnHeight = e.target.getBoundingClientRect().height;
        const list = parent.querySelector('.accordion__list');

        list.classList.toggle('accordion__list--active')

        listHeight = list.getBoundingClientRect().height;

        if (listHeight + btnHeight > containerHeight) {
            parent.style.height = `${list.offsetHeight+btnHeight}px`
        } else {
            parent.style.height = `${rootHeight[parent.dataset.key]}px`
        }


    }
}));
const button = document.querySelectorAll('.list-wrapper__title');
const listWrappers = document.querySelectorAll('.list-wrapper');

const setDataset = () => {


    listWrappers.forEach((wrapp, i) => {
        wrapp.dataset.key = i;
        wrapp.firstElementChild.dataset.key = i;

    });

}
setDataset();

const getDefaultListWrapperHeight = () => {
    const output = [];
    listWrappers.forEach(wrapp =>
        output.push(wrapp.offsetHeight));


    return output


}
const rootHeight = getDefaultListWrapperHeight();

button.forEach(btn => btn.addEventListener('click', (e) => {

    if (e.target.parentNode.dataset.key === e.target.dataset.key) {

        e.target.classList.toggle('list-wrapper__title--active')
        const containerHeight = e.target.
        parentNode.getBoundingClientRect().height;
        let listHeight;
        let btnHeight = e.target.getBoundingClientRect().height;

        e.target.parentNode.querySelectorAll('.list-wrapper__list').forEach(element => {

            element.classList.toggle('list-wrapper__list--active')

            listHeight = element.getBoundingClientRect().height;



            if (listHeight + btnHeight > containerHeight) {
                e.target.parentNode.style.height = `${element.offsetHeight+btnHeight}px`
            } else {
                e.target.parentNode.style.height = `${rootHeight[e.target.parentNode.dataset.key]}px`
            }

        });

    }
}));
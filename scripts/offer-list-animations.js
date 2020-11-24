const button = document.querySelectorAll('.list-wrapper__title');
/* const li = document.querySelectorAll('.list-wrapper__item'); */
document.querySelectorAll('.list-wrapper').forEach((wrapp, i) => {
    wrapp.dataset.key = i;
    wrapp.firstElementChild.dataset.key = i;

});
/* const list = document.querySelectorAll('.list-wrapper__list'); */

const listWrappers = document.querySelectorAll('.list-wrapper');


/* if e.target.parentNode === wrapper */

const getDefaultListWrapperHeight = () => {
    const output = [];
    listWrappers.forEach(wrapp =>
        output.push(wrapp.offsetHeight));


    return output


}
const rootHeight = getDefaultListWrapperHeight();
console.log(rootHeight);
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
                e.target.parentNode.style.height = `${rootHeight[e.target.parentNode.dataset.key]}px` /* coś musi wykryć ile tu jest defaultowo */

            }

            console.log(e.target.parentNode.dataset.key);
        });

        /* e.target.parentNode.classList.toggle("list-wrapper--ative") */



    }



    /* document.querySelectorAll('.list-wrapper__list').forEach(element => element.classList.toggle('list-wrapper__list--active')) */


}))
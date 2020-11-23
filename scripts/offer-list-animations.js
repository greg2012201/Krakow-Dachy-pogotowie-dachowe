const button = document.querySelectorAll('.list-wrapper__title');
/* const li = document.querySelectorAll('.list-wrapper__item'); */
document.querySelectorAll('.list-wrapper').forEach((wrapp, i) => {
    wrapp.dataset.key = i;
    wrapp.firstElementChild.dataset.key = i;

});
/* const list = document.querySelectorAll('.list-wrapper__list'); */




/* if e.target.parentNode === wrapper */

const getDefaultListWrapperHeight = () => {}


button.forEach(btn => btn.addEventListener('click', (e) => {




    if (e.target.parentNode.dataset.key === e.target.dataset.key) {
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
                e.target.parentNode.style.height = '70px' /* coś musi wykryć ile tu jest defaultowo */
            }


        });

        /* e.target.parentNode.classList.toggle("list-wrapper--ative") */



    }



    /* document.querySelectorAll('.list-wrapper__list').forEach(element => element.classList.toggle('list-wrapper__list--active')) */


}))
const button = document.querySelectorAll('.list-wrapper__title');
/* const li = document.querySelectorAll('.list-wrapper__item'); */
document.querySelectorAll('.list-wrapper').forEach((wrapp, i) => {
    wrapp.dataset.key = i;
    wrapp.firstElementChild.dataset.key = i;

});
/* const list = document.querySelectorAll('.list-wrapper__list'); */




/* if e.target.parentNode === wrapper */




button.forEach(btn => btn.addEventListener('click', (e) => {


    if (e.target.parentNode.dataset.key === e.target.dataset.key) {
        let listHeight;
        const btnHeight = e.target.getBoundingClientRect().height;
        console.log(btnHeight);
        e.target.parentNode.querySelectorAll('.list-wrapper__list').forEach(element => {

            element.classList.toggle('list-wrapper__list--active')

            listHeight = element.getBoundingClientRect().height;


            e.target.parentNode.style.height = `${listHeight+btnHeight}px`
        });

        /* e.target.parentNode.classList.toggle("list-wrapper--ative") */



    }



    /* document.querySelectorAll('.list-wrapper__list').forEach(element => element.classList.toggle('list-wrapper__list--active')) */


}))
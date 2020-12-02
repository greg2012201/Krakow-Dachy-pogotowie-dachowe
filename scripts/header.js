const header = document.querySelector('.header');
const mask = document.querySelector('.header--mask');

let count = 0;
let opacity = 100;
let scrollPos = 0;



const colorChange = (isScrollDown, inOffset, pagePosition, percent) => {



    /* if (headerTop == pagePosition) opacity = 100;
    else if (headerBottom == pagePosition) opacity = 0;
    console.log(opacity); */

    if (isScrollDown && inOffset) {
        /* spróbować bardziej zabezpieczyć to elseifem */
        /* count++; */


    } else if (!isScrollDown && inOffset) {
        /* muszę to bardziej zabezpieczyć bo chyba dla tego nie działa że jest nie zabezpieczone bo musi być tu też in offset =true */
        /*  count--; */
        opacity += 2;
    }


    if (opacity <= 0) opacity = 0
    else if (opacity >= 100) opacity = 100
    if (count <= 0) count = 0
    else if (count >= 255) count = 255


    mask.style.backgroundColor = `rgb(${count},${count},${count})`;
    header.style.opacity = `${opacity = percent}%`



}



const scroll = () => {


    const headerTop = header.getBoundingClientRect().top
    const headerBottom = header.getBoundingClientRect().bottom
    const pagePosition = window.pageYOffset
    const headerHeight = header.getBoundingClientRect().height
    console.log(pagePosition / headerHeight * 100);
    const percent = headerBottom / headerHeight * 100
    /*  console.log(headerBottom);
     console.log(headerHeight);
     console.log(headerTop); */
    /* console.log(headerBottom, headerTop);
    console.log(pagePosition <= headerHeight); */

    let scrollDown;
    let inOffset;

    if (headerTop < scrollPos) {
        scrollDown = true
        scrollPos = headerTop;

    } else {
        scrollDown = false
        scrollPos = headerTop;

    }
    if (pagePosition <= headerHeight) inOffset = true
    else inOffset = false;




    colorChange(scrollDown, inOffset, pagePosition, percent)

}

document.addEventListener('scroll', scroll);
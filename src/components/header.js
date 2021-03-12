const changeWhenScroling = (element) => {

    const parent = element.parentElement
    const dimensions = getDimensions(element, parent);
    const {
        elementHeight,
        parentTop,
    } = dimensions

    const percent = 100 - (-parentTop) / elementHeight * 100;


    if (percent >= 0) {

        element.style.opacity = `${percent}%`


    } else {
        element.style.opacity = '0';
    }

};

const getDimensions = (element, parent) => {

    return {
        elementHeight: element.getBoundingClientRect().height,
        parentTop: parent.getBoundingClientRect().top


    }
}

document.addEventListener('scroll', () => changeWhenScroling(document.querySelector('.header')));
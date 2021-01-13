// pasuje zrobić zbezpieczenie jak się wyjedze z intoView to wtedy jest opacity 0;
const changeWhenScroling = (element) => {

    const percent = element.getBoundingClientRect().bottom / element.getBoundingClientRect().height * 100

    if (percent >= 0) {

        element.style.opacity = `${percent}%`


    } else return

}

document.addEventListener('scroll', () => changeWhenScroling(document.querySelector('.header')));
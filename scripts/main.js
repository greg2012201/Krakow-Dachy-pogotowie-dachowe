document.querySelector('.about').addEventListener('click', () => {
    setTimeout(() =>
        document.querySelector('p').scrollIntoView({
            behavior: 'smooth'
        }), 2000)
});
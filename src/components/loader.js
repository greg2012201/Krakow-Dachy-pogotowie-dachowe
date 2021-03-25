const loader = document.querySelector('.loader');
const loaderCheck = loader.querySelector('.loader__check');
const loaderActive = () => loader.classList.add('loader--active');

const changeColor = (color) =>
  document.documentElement.style.setProperty('--loader-color', color);

const loaderSuccess = () => {
  loaderCheck.classList.add('loader__check--success');
  changeColor('green');
};
const loaderError = () => {
  loaderCheck.classList.add('loader__check--error');
  changeColor('red');
};

export { loaderActive, loaderError, loaderSuccess };
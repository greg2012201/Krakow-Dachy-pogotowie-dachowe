const submitButton = document.querySelector('.submit-button');
const sendingButtonState = () => {
  submitButton.classList.add('submit-button--sending');
  submitButton.textContent = '';
};
const successButtonState = () => {
  submitButton.classList.remove('submit-button--sending');
  submitButton.classList.add('submit-button--sended');
};

const sendingErrorButtonState = () => {
  submitButton.classList.remove('submit-button--sending');
  submitButton.classList.add('submit-button--sending-error');
};

export { sendingButtonState, sendingErrorButtonState, successButtonState };
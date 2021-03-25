import { modifierManage } from '../tools/modifierManage';

const POST_URL = process.env.PROXY_URL;
const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__button');
const loader = document.querySelector('.loader');
const loaderCheck = loader.querySelector('.loader__check');

/* MAIN SUCCESS/ERROR FUNCTION */

const success = () => {
  loaderSuccess();
  successButtonState();
  setSuccessColor();
};
const error = () => {
  loaderError();
  sendingErrorButtonState();
  setErrorColor();
};

const disableForm = () =>
  [...form].forEach((element) => (element.disabled = true));

/* LOADER */

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

/* SUBMIT BUTTON */

const sendingButtonState = () => {
  submitButton.classList.add('form__button--sending');
  submitButton.textContent = '';
};
const successButtonState = () => {
  submitButton.classList.remove('form__button--sending');
  submitButton.classList.add('form__button--sended');
};

const sendingErrorButtonState = () => {
  submitButton.classList.remove('form__button--sending');
  submitButton.classList.add('form__button--sending-error');
};

// SUCCESS/ERROR FIELDS COLOR
const setSuccessColor = () => {
  modifierManage([form], '--success', false);
};
const setErrorColor = () => {
  modifierManage([form], '--error', false);
};

// FORM FROM HTML

const formDataToJson = (formData) => {
  const entries = formData.entries();

  const dataObj = Array.from(entries).reduce((data, [key, value]) => {
    data[key] = value;
    if (key === 'email') {
      data._replyTo = value;
    }
    return data;
  }, {});

  return JSON.stringify(dataObj);
};

//  SUBMITION AND REQUEST

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  formData.append('_subject', 'Zapytanie Kraków Dachy');
  sendingButtonState();
  loaderActive();
  fetch(POST_URL, {
    method: 'POST',
    body: formDataToJson(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .catch((e) => {
      disableForm();
      setTimeout(() => {
        error();
      }, 1500);

      console.log(e);
    })
    .then((r) => {
      return r.json();
    })

    .then((res) => {
      if (res.statusCode === 200) {
        setTimeout(() => {
          success();
        }, 1500);

        disableForm();
      } else {
        disableForm();
        setTimeout(() => sendingError(submitButton), 1500);

        throw Error(`coś poszło nie tak po stronie serwera: ${res.message}!`);
      }
    });
});

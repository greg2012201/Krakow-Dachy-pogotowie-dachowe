import {modifierManage} from '../tools/modifierManage';
import {loaderActive, loaderError, loaderSuccess} from './loader';
import {
  sendingButtonState,
  sendingErrorButtonState,
  successButtonState,
} from './submitButton';

const POST_URL = process.env.FORM_SPREE_URL;
const form = document.querySelector('.form');

/* MAIN SUCCESS/ERROR FUNCTIONS */

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
    .then(() => {
      setTimeout(() => {
        success();
      }, 1500);

      disableForm();
    })
    .catch((e) => {
      disableForm();
      setTimeout(() => {
        error();
      }, 1500);
      setTimeout(() => sendingError(submitButton), 1500);

      throw Error(`coś poszło nie tak po stronie serwera: ${res.message}!`);
    });
});

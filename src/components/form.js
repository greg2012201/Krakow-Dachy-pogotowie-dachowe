const POST_URL = process.env.PROXY_URL;
const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__button');
const loader = document.querySelector('.loader');
const loaderCheck = loader.querySelector('.loader__check');



/* LOADER */


const loaderActive = (loader) => loader.classList.add('loader--active');


const changeColor = (color) => document.documentElement.style.setProperty('--loader-color', color);



const loaderSucess = () => {


    loaderCheck.classList.add('loader__check--sucess');
    changeColor('green');

}
const loaderError = () => {
    loaderCheck.classList.add('loader__check--error');
    changeColor('red');
}

/* SUBMIT BUTTON */

const sending = (button) => {
    button.classList.add('form__button--sending');
    button.textContent = '';
}
const sended = (button) => {

    button.classList.remove('form__button--sending');
    button.classList.add('form__button--sended');

}

const sendingError = (button) => {
    button.classList.remove('form__button--sending');
    button.classList.add('form__button--sending-error');
}

const disableForm = () => [...form].forEach(element => element.disabled = true);







// FORM FROM HTML  

const formDataToJson = formData => {
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
    sending(submitButton);
    loaderActive(loader);
    fetch(POST_URL, {
            method: 'POST',
            body: formDataToJson(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(e => {
            disableForm();
            setTimeout(() => {
                sendingError(submitButton);
                loaderError();
            }, 1500)

            console.log(e);
        })
        .then(r => {
            return r.json()
        })

        .then(res => {

            if (res.statusCode === 200) {

                setTimeout(() => {
                    form.reset();
                    loaderSucess();
                    sended(submitButton);
                }, 1500)


                disableForm();
            } else {
                disableForm();
                setTimeout(() => sendingError(submitButton), 1500)

                throw Error(`coś poszło nie tak po stronie serwera: ${res.message}!`);
            }

        })

});
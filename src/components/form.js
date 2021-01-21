const POST_URL = process.env.PROXY_URL;
const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__button');


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
    console.log('click');
    const formData = new FormData(this);
    formData.append('_subject', 'Zapytanie Kraków Dachy');
    sending(submitButton);
    fetch(POST_URL, {
            method: 'POST',
            body: formDataToJson(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(e => {

            sendingError(submitButton);
            console.log(e);
        })
        .then(r => {
            console.log('wysyłanie...');

            return r.json()
        })

        .then(res => {

            if (res.statusCode === 200) {
                form.reset();
                sended(submitButton);
            } else {
                sendingError(submitButton);
                throw Error(`coś poszło nie tak po stronie serwera: ${res.message}!`);
            }

        })

});
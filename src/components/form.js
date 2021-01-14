const FORMSPREE_POST_URL = '';

const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__button');

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




form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    formData.append('_subject', 'Zapytanie Kraków Dachy');

    fetch(FORMSPREE_POST_URL, {
            method: 'POST',
            body: formDataToJson(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(e => {
            console.log('error');
        })
        .then(r => r.json())

        .then(response => {

            if (response.ok) {
                console.log(response);

            } else {
                console.log('źle');
            }
        })





});
(function () {
    const siteForms = document.querySelectorAll('form');
    if (siteForms) {
        siteForms.forEach(form => {
            form.addEventListener('submit', async function (e) {
                e.preventDefault();
                let formNameInput,
                    formPhoneInput,
                    formEmailInput;
                formNameInput = this.name ? this.name.value : "Имя не указано";
                formPhoneInput = this.phone ? this.phone.value : "Номер телефона не указан";
                formEmailInput = this.email ? this.email.value : "noemail@main.ru";

                const formCheckbox = form.querySelector('input[type="checkbox"]');
                if (formNameInput.length < 3 || formPhoneInput.length < 18 || !formCheckbox.checked) {
                    return;
                }
                const dataObj = {
                    "name": String(formNameInput),
                    "last_name": '',
                    "phone": String(formPhoneInput),
                    "email": String(formEmailInput),
                    "comment": "Новая заявка с сайта",
                    "utm_content": window.location.toString(),
                }
                // Запрос на указанный URL
                let response = await fetch('https://cloud.1c.fitness/api/hs/lead/Webhook/dd5694df-a334-4a2c-b11a-9f885f59c262', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(dataObj),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    return response;
                })
                    .then(data => {
                        console.log(data);
                    });
            });
        });
    }
})();

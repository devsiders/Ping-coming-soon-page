const btn = document.getElementById('btn');
const email = document.getElementById('email');
const error = document.getElementById('error');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    validatedEmail(email);
})

function validatedEmail(email){
    let exPeg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (exPeg.test(email.value)) {
        error.style.display = 'none';
        email.style.border = '1px solid hsl(223, 87%, 63%)';
        email.value = '';
    }else{
        email.style.border = '1px solid red';
        error.style.display = 'block';
    }
}


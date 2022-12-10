const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('Усі поля повинні бути заповнені!');
    }

    console.log({email: email.value, password: password.value});
    
    event.currentTarget.reset();
}


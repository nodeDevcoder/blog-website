
const today = new Date();
const day = parseInt(String(today.getDate()).padStart(2, '0'));
const month = parseInt(String(today.getMonth()).padStart(2, '0'));
const year = today.getFullYear();

const form = document.getElementById('signup-form');
const email = document.getElementById('email-input');
const username = document.getElementById('username-input');
const password = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const birthday = document.getElementById('birthday-input');
const gender = document.getElementsByName('gender');
const calendar = document.getElementsByClassName('mc-calendar');

const showPass = document.getElementById('show-pass');
const showConfPass = document.getElementById('show-conf-pass');

const datepicker = MCDatepicker.create({
    el: '#birthday-input',
    dateFormat: 'MMM-DD-YYYY',
    bodyType: 'inline',
    customOkBTN: 'Done',
    customCancelBTN: 'Cancel',
    minDate: new Date(1910, month, day),
    maxDate: new Date(year - 13, month, day)
})

function valid(input) {
    input.classList.remove('invalid', 'is-danger');
    input.classList.add('valid', 'is-success');
}

function invalid(input) {
    input.classList.remove('valid', 'is-success');
    input.classList.add('invalid', 'is-danger');
}

function checkEmailValidity(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function checkUsernameValidity(username) {
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    return regex.test(username);
}

function checkPasswordValidity(password) {
    const regex = /^.{8,20}$/;
    return regex.test(password);
}

function checkBdayValidity(bday) {
    const regex = /^[A-Z]{1}[a-z]{2}-[0-9]{2}-[0-9]{4}$/;
    return regex.test(bday);
}

email.addEventListener('keyup', function () {
    if (checkEmailValidity(email.value)) {
        valid(email);
    } else {
        invalid(email);
    }
});

username.addEventListener('keyup', function () {
    if (checkUsernameValidity(username.value)) {
        valid(username);
    } else {
        invalid(username);
    }
});

password.addEventListener('keyup', function () {
    if (checkPasswordValidity(password.value)) {
        valid(password);
    } else {
        invalid(password);
    }
});

confirmPassword.addEventListener('keyup', function () {
    if (checkPasswordValidity(password.value) && confirmPassword.value === password.value) {
        valid(confirmPassword);
    } else {
        invalid(confirmPassword);
    }
});

calendar[0].addEventListener('click', function () {
    if (checkBdayValidity(birthday.value)) {
        valid(birthday);
    } else {
        invalid(birthday);
    }
})

showPass.addEventListener('click', function () {
    // change eye icon
    cls = this.children[0].classList
    if (cls.contains('show')) {
        cls.add('hide', 'fa-eye-slash');
        cls.remove('show', 'fa-eye');
        this.parentElement.children[0].setAttribute('type', 'password');
    } else {
        cls.add('show', 'fa-eye');
        cls.remove('hide', 'fa-eye-slash');
        this.parentElement.children[0].setAttribute('type', 'text');
    }
    // change password type
});


showConfPass.addEventListener('click', function () {
    // change eye icon
    cls = this.children[0].classList
    if (cls.contains('show')) {
        cls.add('hide', 'fa-eye-slash');
        cls.remove('show', 'fa-eye');
        this.parentElement.children[0].setAttribute('type', 'password');
    } else {
        cls.add('show', 'fa-eye');
        cls.remove('hide', 'fa-eye-slash');
        this.parentElement.children[0].setAttribute('type', 'text');
    }
    // change password type
});


form.addEventListener('submit', function (event) {

    let faults = 0;

    if (!checkEmailValidity(email.value)) {
        event.preventDefault();
        invalid(email);
        faults++;
    }
    if (!checkUsernameValidity(username.value)) {
        event.preventDefault();
        invalid(username);
        faults++;
    }
    if (!checkPasswordValidity(password.value)) {
        event.preventDefault();
        invalid(password);
        faults++;
    }
    if (!checkBdayValidity(birthday.value)) {
        event.preventDefault();
        invalid(birthday);
        faults++;
    }

    if (confirmPassword.value !== password.value) {
        event.preventDefault();
        invalid(confirmPassword);
    }

    if (document.querySelector('#terms').checked !== true) {
        event.preventDefault();
    }
});
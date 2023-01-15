import throttle from 'lodash.throttle';

const inputForm = document.querySelector(".feedback-form");
const inputEmail = document.querySelector(".feedback-form input[name=email]");
const inputMessage = document.querySelector(".feedback-form textarea[name=message]");

let userData = {};

try {
    if (localStorage.getItem("feedback-form-state")?.includes("email")) {
        inputEmail.value = JSON.parse(
            localStorage.getItem("feedback-form-state")).email;
        
        userData.email = inputEmail.value;
    }

    if (localStorage.getItem("feedback-form-state")?.includes("message")) {
        inputMessage.value = JSON.parse(
            localStorage.getItem("feedback-form-state")).message;
    
        userData.message = inputMessage.value;
    }
} catch (error) {
    console.log(`TryCatch error name: ${error.name}`);

}
function changeInput(e) {
    userData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}
function onFormSubmit(e) {
    e.preventDefault();
    if (inputMessage.value !== '' && inputEmail.value !== '') {
         console.log({
        email: inputEmail.value,
        message: inputMessage.value,
    });

    e.target.reset();
    localStorage.removeItem("feedback-form-state");
    userData = {};
    } else {
        alert("Заповніть пусті поля")
    }
   
}
inputForm.addEventListener('input', throttle(changeInput, 500));
inputForm.addEventListener('submit', onFormSubmit);
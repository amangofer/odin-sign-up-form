const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password")
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();


    if(firstNameValue == "") {
        setErrorFor(firstName, "* First Name cannot be blank!");
    }else {
        setSuccessFor(firstName);
    }

    if(lastNameValue == ""){
        setErrorFor(lastName, "* Last Name cannot be blank!");
    }else {
        setSuccessFor(lastName);
    }

    if(emailValue == ""){
        setErrorFor(email, "* Email cannot be blank!")
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "* Email is not valid!")
    }else{
        setSuccessFor(email);
    }

    if(phoneValue == ""){
        setErrorFor(phone, "* Phone cannot be blank!");
    }else{
        setSuccessFor(phone);
    }

    if(passwordValue == ""){
        setErrorFor(password, "* Password cannot be blank!");
    }else{
        setSuccessFor(password);
    }

    if(confirmPasswordValue == ""){
        setErrorFor(confirmPassword, "* Confirm Password cannot be blank!");
    }else if(passwordValue !== confirmPasswordValue){
        setErrorFor(password, "* Password do not match!");
        setErrorFor(confirmPassword, "");
    }else{
        setSuccessFor(password);
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
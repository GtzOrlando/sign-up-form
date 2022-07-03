let password1 = document.getElementById("password");
let password2 = document.getElementById("confirmPass");
let submitButton = document.getElementById("submitButton");

function validatePass() {
    if (password1.value.length > 7 && password2.value.length > 7) {
        if (password1.value === password2.value) {
            submitButton.disabled = false;
            password1.className = "correct";
            password2.className = "correct";
        } else {
            submitButton.disabled = true;
            password1.className = "error";
            password2.className = "error";            
        }
    } else {
        password1.className = "error";
        password2.className = "error";
    }
}

password1.onchange = validatePass;
password2.onkeyup = validatePass;
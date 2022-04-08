function validatePass() {
    if (document.getElementById("password").value == document.getElementById("confirmPass").value) {
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("confirmPass").style.borderColor = "green";
        document.getElementById("confirmPass").setCustomValidity("*Passwords do not match");
    } else {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirmPass").style.borderColor = "red";
        document.getElementById("confirmPass").setCustomValidity("");
    }
}

document.getElementById("password").onchange = validatePass;
document.getElementById("confirmPass").onkeyup = validatePass;
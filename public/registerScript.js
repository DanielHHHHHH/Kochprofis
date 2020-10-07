// JavaScript für register.html

const button = document.getElementById("register");
const txtUsername = document.getElementById("benutzername");
const txtPassword = document.getElementById("kennwort");
const txtPasswordConfirm = document.getElementById("kennwortConfirm");

button.addEventListener("click", (evt) => {

    //Abfrage ob Textfeld "Username" leer ist
    if (txtUsername.value == "") {
        alert("Bitte erst Benutzername eingeben");
    } else {
        alert("Sie haben einen Benutzername eingegeben");
    }

    //Abfrage ob Textfeld "Password" leer ist
    if (txtPassword.value == "") {
        alert("Bitte erst Passwort eingeben");
    } else {
        alert("Sie haben ein Passwort eingegeben");
    }

    //Abfrage ob Textfeld "PasswordConfirm" leer ist
    if (txtPasswordConfirm.value == "") {
        alert("Bitte erst Passwort bestätigen");
    } else {
        alert("Sie haben ein Passwort bestätigt");
    }

    //Abfrage ob die eingegebenen Passwörter übereinstimmen
    if (txtPassword.value == txtPasswordConfirm.value) {
        alert("alles richtig gemacht");
    } else {
        alert("nicht übereinstimmend");
    }

    evt.preventDefault();
});

/*
button.addEventListener("click", (evt) => {

    if (txtPassword.value == "") {
        alert("Bitte erst Passwort eingeben");
    } else {
        alert("Sie haben ein Passwort eingegeben");
    }

    evt.preventDefault();
});

button.addEventListener("click", (evt) => {

    if (txtPasswordConfirm.value == "") {
        alert("Bitte erst Passwort bestätigen");
    } else {
        alert("Sie haben ein Passwort bestätigt");
    }

    evt.preventDefault();
});

button.addEventListener("click", (evt) => {
    if (txtPassword.value == txtPasswordConfirm.value) {
        alert("alles richtig gemacht");
    } else {
        alert("nicht übereinstimmend");
    }
    evt.preventDefault();
});
*/

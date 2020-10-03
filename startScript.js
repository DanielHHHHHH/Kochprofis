
const button = document.getElementById("anmelden");

const txtUsername = document.getElementById("benutzername");
const txtPassword = document.getElementById("kennwort");


button.addEventListener("click", (evt) => {

    if (txtUsername.value == "") {
        alert("Bitte erst Benutzername eingeben");
    } else {
        alert("Sie haben einen Benutzername eingegeben");
    }

    evt.preventDefault();
});

button.addEventListener("click", (evt) => {

    if (txtPassword.value == "") {
        alert("Bitte erst Passwort eingeben");
    } else {
        alert("Sie haben ein Passwort eingegeben");
    }

    evt.preventDefault();
});


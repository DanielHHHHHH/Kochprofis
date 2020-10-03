
const button = document.getElementById("anmelden");

const txtUsername = document.getElementById("benutzername");
const txtPassword = document.getElementById("kennwort");


button.addEventListener("click", (evt) => {

    if (txtUsername.value == "") {
        console.log("Bitte erst Benutzername eingeben");
    } else {
        console.log("Sie haben einen Benutzername eingegeben");
    }

    evt.preventDefault();
});

button.addEventListener("click", (evt) => {

    if (txtPassword.value == null) {
        console.log("Bitte erst Passwort eingeben");
    } else {
        console.log("Sie haben ein Passwort eingegeben");
    }

    evt.preventDefault();
});


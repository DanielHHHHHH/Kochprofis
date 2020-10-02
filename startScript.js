
//Benutzer wird ausgeloggt
const button = document.querySelector("#anmelden");
const txtUsername=document.querySelector("#benutzername");
var txtValue=txtUsername.value;

button.addEventListener("click", (evt) => {

    if (txtValue=="") {
        alert("Bitte erst was eingeben");
    } else {
        alert("Sie haben etwas eingegeben");
    }
    

    evt.preventDefault();


    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
});
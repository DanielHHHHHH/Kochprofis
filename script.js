//Benutzer wird ausgeloggt
const button = document.querySelector("#ausloggen");

button.addEventListener("click", (evt) => {
    alert("Sie werden ausgeloggt!", evt.target);

    evt.preventDefault();


    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
});

//Button erstellen
const button = document.querySelector('#erstellen');

button.addEventListener("click, (evt)" => {

});

//Button bearbeiten
const button = document.querySelector('#bearbeiten');

button.addEventListener("click, (evt)" => {

});

//Button löschen
const button = document.querySelector('#löschen');

button.addEventListener("click, (evt)" => {

});
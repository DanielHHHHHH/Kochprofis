//Button ausloggen
const button = document.querySelector("#ausloggen");

button.addEventListener("click", (evt) => {
    alert("Sie werden ausgeloggt!", evt.target);

    evt.preventDefault();


    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
});


const txtrezeptText = document.getElementById("rezeptText");

//Button erstellen
const button = document.querySelector('#erstellen');

button.addEventListener("click", (evt) => {
    if (txtrezeptText.value == "") {
        alert("Bitte erst einen Text eingeben");
    } else {
        alert("Ihr Rezept wurde übernommen");
    }


//Button bearbeiten
const button = document.querySelector('#bearbeiten');

button.addEventListener("click", (evt) => {
    if (txtrezeptText.value == "" or txtrezeptText) /*alter Text gleich neuer Text noch einfügen*/ 
    {
        alert("Bitte erst den Text ändern");
    } else {
        alert("Die Änderung wurde übernommen");
    }


//Button löschen
const button = document.querySelector('#löschen');

button.addEventListener("click", (evt) => {
    
    alert("Das Rezept wurde gelöscht");
});
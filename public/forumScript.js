//JavaScript für Forum-Seite.html

//Const-Selectoren - Erstellen
const erstellen = document.querySelector(".abschicken");
const btnerstellen  = document.querySelector("#btnerstellen");

//Formular und Fetch - Erstellen
erstellen.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntries(new FormData(erstellen));

    fetch("/erstellen", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.ok);
    });

    console.log("FORM SUBMITTED", values);
});

//Button Abschicken
btnerstellen.addEventListener("click", (evt) => {
  location.href = '/Forum-Seite.html';
});

//Button ausloggen
const button = document.querySelector("#ausloggen");

button.addEventListener("click", (evt) => {
  evt.preventDefault();
  alert("Sie werden ausgeloggt!", evt.target);
  location.href = '/';
});

/*
//Probe: DB-Daten bei Laden der Seite anzeigen
document.addEventListener('DOMContenLoaded', function(event) {
  fetch('/laden')
  .then(response => response.json())
  .then(data => console.log(data));
});
*/

//Const-Selectoren - Laden
const laden = document.querySelector(".rezeptverwalten");
const btnersuchen  = document.querySelector("#suchen");

//Formular und Fetch - Laden
laden.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const values = Object.fromEntries(new FormData(laden));

  fetch("/laden", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    console.log(res.ok);
  });

  console.log("FORM SUBMITTED", values);
});
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

//Const-Selectoren - Verwalten
const verwalten = document.querySelector(".rezeptverwalten");
const btnsuchen  = document.querySelector("#auswahl");

//Rezepteverwalten löschen, anzeigen und bearbeiten
verwalten.addEventListener("click", (evt) => {
  evt.preventDefault();

  const values = Object.fromEntries(new FormData(verwalten));

  fetch("/verwalten", {
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

btnsuchen.addEventListener("click", () => {
  
})



//Wenn die Seite aufgerufen wird sollen die Daten aus der DB in der Tabelle angezeigt werden
//Const-Selectoren - Laden
const laden = document.querySelector(".tabelle");

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


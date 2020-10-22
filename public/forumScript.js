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
*/

// Löschen
const btnDelete = document.querySelector('#löschen');
const verwalten = document.querySelector(".rezeptverwalten");

btnDelete.addEventListener("click", (evt) => {
  evt.preventDefault();  
  const values = Object.fromEntries(new FormData(verwalten));

  fetch("/delete", {
      method: "DELETE",
      body: JSON.stringify(values),
      headers: {
          "content-type": "application/json",
      },
  }).then((res) => {
      console.log(res.ok);
      if (res.ok) {
          alert("Löschen erfolgreich");
      } else {
          alert("Löschen fehlgeschlagen");
      }
  });

  console.log("FORM SUBMITTED", values)

})



//Wenn die Seite aufgerufen wird sollen die Daten aus der DB in der Tabelle angezeigt werden
//Const-Selectoren - Laden
const laden = document.querySelector(".tabelle");
const fetchButton = document.querySelector("#suchen");

//Formular und Fetch - Laden
laden.addEventListener("click", (evt) => {
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

//Test GIT-HUB-CODE
fetchButton.addEventListener("click", () => {
  fetch("/laden?auswahl=1")
    .then((res) => {
      // console.log(res.ok, res.status, res);

      if (!res.ok) return Promise.reject(res.status);

      return res.json();
    })
    .then((laden) => {
      // console.log(todos);

      laden.forEach((laden) => {
        const listItem = document.createElement("li");
        listItem.textContent = laden.title;

        });
    })
    .catch((e) => {
      alert(`WHOOPS: ${e}`);
    });
});
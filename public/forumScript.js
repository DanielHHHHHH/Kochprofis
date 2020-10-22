//JavaScript für Forum-Seite.html

//Const-Selectoren - Erstellen
const erstellen = document.querySelector(".abschicken");
const btnerstellen = document.querySelector("#btnerstellen");

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

// Löschen
const btnDelete = document.querySelector('#löschen');
const verwalten = document.querySelector(".rezeptverwalten");
const txtAuswahl = document.querySelector('#auswahl');

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
      txtAuswahl.value = "";
    } else {
      alert("Löschen fehlgeschlagen");
    }
  });

  console.log("FORM SUBMITTED", values)

})

//Wenn die Seite aufgerufen wird sollen die Daten aus der DB in der Tabelle angezeigt werden
//Const-Selectoren - Laden
const laden = document.querySelector(".tabelle");

//Formular und Fetch - Laden
laden.addEventListener("DOMContentLoaded", (evt) => {
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

// Rezept bearbeiten
const btnSearch = document.querySelector('#suchen');
const txtTitle = document.querySelector('#txtTitle');
const txtText = document.querySelector('#txtText');
const txtAutor = document.querySelector('#txtAutor');
btnSearch.addEventListener("click", (evt) => {

  fetch("/search")
    .then((res) => {
      return res.json();
    })
    .then((search) => {
      console.log(search);
      txtTitle.value=search.name;
    })
    .catch((e) => {
      alert(`WHOOPS: ${e}`);
    });

});




/*
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
*/








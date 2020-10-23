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
document.addEventListener("DOMContentLoaded", function () {

  console.log("Seite geladen");

  const values = Object.fromEntries(new FormData(laden));

  fetch('/search2')
  .then((res) => {
    console.log(res.ok);
    if (res.ok) {
      return res.json();  
    } else {
      alert("Fehler 404");
    }
  });

  console.log("FORM SUBMITTED", values);
});

function loadHTMLTable(data) {
  const table = document.querySelector('table body');

  if (data.length == 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'> No Data </td></tr>";
  }
}


// Rezept suchen
const btnSearch = document.querySelector('#suchen');
const txtTitle = document.querySelector('#txtTitle');
const txtText = document.querySelector('#txtText');
const txtAutor = document.querySelector('#txtAutor');


btnSearch.addEventListener("click", (evt) => {
  let wanted = txtAuswahl.value;
  fetch("/search")
    .then((res) => {
      return res.json();
    })
    .then((search) => {
      search.forEach((rezept) => {
        if (rezept.id == wanted) {
          txtTitle.value = rezept.name;
          txtAutor.value = rezept.autor;
          txtText.value = rezept.rezepttext;

        } else {
          console.log("Rezept " + rezept.id + " ist nicht das Gesuchte!")
        }
      });

    })
    .catch((e) => {
      alert(`WHOOPS: ${e}`);
    });

});

// Rezept bearbeiten

const update = document.querySelector(".abschicken");
const btnAlter = document.querySelector('#bearbeiten');

btnAlter.addEventListener("click", (evt) => {
  evt.preventDefault();
  const values = Object.fromEntries(new FormData(erstellen));
  const valueId = Object.fromEntries(new FormData(verwalten));

  console.log(values)
  console.log(valueId)
  valuesFin = merge_options(values,valueId);
  console.log(valuesFin);



  fetch("/update", {
    method: "POST",
    body: JSON.stringify(valuesFin),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => {
    console.log(res.ok);
  });

  console.log("FORM SUBMITTED", valuesFin);
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

// https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1,obj2){
  var obj3 = {};
  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
  return obj3;
  }
 






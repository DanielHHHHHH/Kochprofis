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
    if (res.ok) {
      txtAuswahl.value = "";
      txtAutor.value = "";
      txtText.value = "";
      txtTitle.value = "";
      alert("Erstellen erfolgreich");
    } else {
      alert("Erstellen fehlgeschlagen - Bitte alle Felder ausfüllen");
    }
  });

  console.log("FORM SUBMITTED", values);
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
      txtAuswahl.value = "";
      txtAutor.value = "";
      txtText.value = "";
      txtTitle.value = "";
      alert("Löschen erfolgreich");
      txtAuswahl.value = "";
    } else {
      alert("keine valide ID - Löschen fehlgeschlagen");
    }
  });

  console.log("FORM SUBMITTED", values)

})

//Const-Selectoren - Laden
const laden = document.querySelector(".tabelle");


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
      let gefunden = false;
      search.forEach((rezept) => {
        if (rezept.id == wanted) {
          gefunden = true;
          txtTitle.value = rezept.name;
          txtAutor.value = rezept.autor;
          txtText.value = rezept.rezepttext;
        } else {
          console.log("Rezept " + rezept.id + " ist nicht das Gesuchte!")
        }
      });
      if (!gefunden) {
        alert("keine valide ID - Suche fehlgeschlagen")
        txtAuswahl.value = "";
        txtAuswahl.focus();
      }

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
  valuesFin = merge_options(values, valueId);
  console.log(valuesFin);



  fetch("/update", {
    method: "POST",
    body: JSON.stringify(valuesFin),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        txtAuswahl.value = "";
        txtAutor.value = "";
        txtText.value = "";
        txtTitle.value = "";
        alert("Rezept wurde geändert");
      }else{
        alert("keine valide ID - Bearbeiten fehlgeschlagen")
      }

    })
    .catch((e) => {
      alert(`WHOOPS: ${e}`);
    })

  console.log("FORM SUBMITTED", valuesFin);
});

//Rezepte in Tabelle anzeigen
const btnalle  = document.querySelector('#aktualisieren');


btnalle.addEventListener("click", (evt) => {
    evt.preventDefault();

    fetch("/uebersicht",  {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "content-type": "application/json",
      },
      
    }).then((res) => {
      console.log(res.ok);
      location.href = '/Forum-Seite.html';
      
    });

    console.log("FORM SUBMITTED");
});

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function merge_options(obj1, obj2) {
  var obj3 = {};
  for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
  for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
  return obj3;
}







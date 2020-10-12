//JavaScript für Forum-Seite.html

//Const-Selectoren
const rezepte = document.querySelector("#rezeptverwalten");

rezepte.addEventListener("click", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntries(new FormData(rezepte));

    fetch("/rezepte", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    })
    console.log("FORM SUBMITTED", values);
});

//Button ausloggen
const button = document.getElementById("ausloggen");

button.addEventListener("click", (evt) => {
    alert("Sie werden ausgeloggt!", evt.target);

    evt.preventDefault();


    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
});

//Button erstellen
const button = document.getElementById("erstellen");
const txtrezeptText = document.getElementById("rezeptText");

button.addEventListener("click", (evt) => {

    //Abfrage ob Text eingegeben worden ist
    if (txtrezeptText.value == "") {
        alert("Bitte erst einen Text eingeben");
    } else {
        alert("Ihr Rezept wurde übernommen");
    }

    evt.preventDefault();
});

//Button bearbeiten
const button = document.querySelector('#bearbeiten');

button.addEventListener("click", (evt) => {

     //Abfrage ob Text eingegeben worden ist
     if (txtrezeptText.value == "") {
        alert("Bitte erst einen Text eingeben");
    } else {
        alert("Ihr Rezept wurde übernommen");
    }

});

//Button löschen
const button = document.querySelector('#löschen');

button.addEventListener("click", (evt) => {

});

//----------------------------------------------------------------------------------------------------

//Code von Herrn Kronmüller um zu testen
const fetchButton = document.querySelector("#fetchTodos");
const list = document.querySelector("#todoList");
const createForm = document.querySelector("#rezeptvewalten");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = Object.fromEntries(new FormData(e.target));

  fetch("/rezepte", {
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

fetchButton.addEventListener("click", () => {
  fetch("/rezepte")
    .then((res) => {
      // console.log(res.ok, res.status, res);

      if (!res.ok) return Promise.reject(res.status);

      return res.json();
    })
  .then((rezepte) => {
    // console.log(rezepte);

    rezepte.forEach((rezepte) => {
      const listItem = document.createElement("li");
      listItem.textContent = rezepte.title;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "DELETE rezepte";

      deleteButton.addEventListener("click", () => {
        fetch(`/rezepte/${rezepte.id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.ok) {
            listItem.remove();
          }
        });
      });

      listItem.append(deleteButton);

      list.appendChild(listItem);
    });
  })
  .catch((e) => {
    alert(`WHOOPS: ${e}`);
  });
});
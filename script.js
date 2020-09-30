//Benutzer wird ausgeloggt
const button = document.querySelector("#ausloggen");

button.addEventListener("click", (evt) => {
    alert("Sie werden ausgeloggt!", evt.target);

    evt.preventDefault();


    const values = Object.fromEntries(new FormData(evt.target));

    console.log(values);
});
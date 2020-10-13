// JavaScript für index.html

const loginForm = document.querySelector(".verify");
const button = document.querySelector("#btnRegister");

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntries(new FormData(loginForm));

    fetch("/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
        },
    }).then((res) => {
        console.log(res.ok);
        if (res.ok) {
            location.href = '/Forum-Seite.html'; //Weiterleitung zur Startseite
        } else {
            alert("Login fehlgeschlagen");  
        }
    });

    console.log("FORM SUBMITTED", values);
});

button.addEventListener("click", (e) => {
    location.href = '/register.html'; //Weiterleitung zur Registrierungsseite
});

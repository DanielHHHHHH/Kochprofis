// JavaScript für start.html


const loginForm = document.querySelector(".verify");
const button = document.querySelector("#btnLogin");

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntries(new FormData(loginForm));
    console.log(values)



    fetch("/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
        },
    }).then((res) => {
        if (res.ok) {
            location.href = '/Forum-Seite.html';
        } else {
            alert("Login fehlgeschlagen");
        }
    });

    console.log("FORM SUBMITTED", values);
});




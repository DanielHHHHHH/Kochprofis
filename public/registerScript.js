// JavaScript für register.html

const registerForm = document.querySelector(".verify");

registerForm.addEventListener("submit", (evt) => {
    evt.preventDefault();


    const values = Object.fromEntries(new FormData(registerForm));

    

    fetch("/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "content-type": "application/json",
        },
    }).then((res) => {
        console.log(res.ok);
        if (res.ok) {
            location.href = '/Forum-Seite.html';  //Weiterleitung zur Startseite
        } else {
            alert("Registrierung fehlgeschlagen");
        }
    });

    console.log("FORM SUBMITTED", values);
<<<<<<< HEAD
});
=======

});
>>>>>>> 2fc8b62743f22e8dc7e96b3e49e848593fbcf5bd

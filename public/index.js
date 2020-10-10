// JavaScript für start.html

const loginForm = document.querySelector(".verify");
const button = document.querySelector("#btnLogin");

button.addEventListener("click", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntries(new FormData(loginForm));
    console.log(values)


    
    fetch("/", {
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




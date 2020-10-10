// JavaScript für start.html

const loginForm = document.querySelector(".verify");
const button = document.querySelector("#btnLogin");

loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const values = Object.fromEntries(new FormData(evt.target));
    console.log(values)


    
    fetch("/todos", {
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




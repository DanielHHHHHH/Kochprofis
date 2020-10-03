
const button = document.getElementById("register");

const txtUsername = document.getElementById("benutzername");

const txtPassword = document.getElementById("kennwort");
const txtPasswordConfirm = document.getElementById("kennwortConfirm");


var txtValue = txtUsername.value;

console.log("Hallo");
console.log(txtPassword.value);


button.addEventListener("click", (evt) => {

    if (txtPassword.value == txtPasswordConfirm.value) {
        alert("alles richtig gemacht");
        


    } else {
        alert("nicht übereinstimmend");
        

    }


    evt.preventDefault();


});

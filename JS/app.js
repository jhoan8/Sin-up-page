let name = document.getElementById("name");
let mail = document.getElementById("mail");
let pass = document.getElementById("password");
let form = document.getElementById("form");
let mensaje = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regedexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if (name.value.length < 6) {
    warnings += ` Nombre no valido <br>`;
    entrar = true;
  }
  if (!regedexEmail.test(mail.value)) {
    warnings += ` Email no valido <br>`;
    entrar = true;
  }
  if (pass.value.length < 8) {
    warnings += ` Contrasena no valido <br>`;
    entrar = true;
  }
  if (entrar) {
    mensaje.innerHTML += warnings;
  }
});

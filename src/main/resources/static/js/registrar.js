$(document).ready(function() {

});

async function registrarUsuarios(){
let datos = {};
datos.nombre = document.getElementById('txtNombre').value;
datos.apellido = document.getElementById('txtApellido').value;
datos.gmail = document.getElementById('txtGmail').value;
datos.password = document.getElementById('txtPassword').value;

let passwordRepetida = document.getElementById('txtRepetirPassword').value;

if(passwordRepetida != datos.password){
alert("Las contraseñas no coinciden");
return;
}

  const rawResponse = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  alert("La cuenta fue creada con exito")

  window.location.href='login.html'
  };




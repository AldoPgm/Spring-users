$(document).ready(function() {

});

async function iniciarSesion(){
let datos = {};

datos.gmail = document.getElementById('txtGmail').value;
datos.password = document.getElementById('txtPassword').value;




  const rawResponse = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

 const respuesta = await rawResponse.json();
 if(respuesta != null){
 localStorage.token = respuesta;
  localStorage.gmail = datos.gmail;
  window.location.href='tables.html'
  } else {
  alert('Las credenciales ingresadas son incorrectas, por favor intente de nuevo.')}
  };
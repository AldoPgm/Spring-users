// Call the dataTables jQuery plugin
$(document).ready(function() {

cargarUsuarios();

  $('#dataTable').DataTable();
});

async function cargarUsuarios(){

  const rawResponse = await fetch('api/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

  });
  const usuarios = await rawResponse.json();


let listadoHtml='';
  for (let usu of usuarios){
  let txtTelefono = usu.telefono == null ? "-" : usu.telefono
let botonEliminar = '<a href="#" onclick="eliminarUsuario('+usu.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
let usuarioHtml = '<tr><td>' +usu.id+ '+</td><td>' +usu.nombre+ ' ' +usu.apellido+ '</td><td>'+txtTelefono+'</td><td>'+usu.gmail+'</td><td>'+botonEliminar+'</td></tr>';
listadoHtml += usuarioHtml;

  }

document.querySelector('#dataTable tbody').outerHTML = listadoHtml;

}

async function eliminarUsuario(id){
if(!confirm('¿Desea eliminar este usuario?')){
return;
}

const rawResponse = await fetch('api/usuarios/' + id, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

  })

  location.reload();
  };


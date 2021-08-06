

let listarForm = document.getElementById('listarForm');

document.addEventListener('DOMContentLoaded',listarFormData)


let boton = document.getElementById('btnRegistro');


boton.addEventListener('click',capturaDatos)



let form = document.getElementById('form');



form.addEventListener('submit',formSumbit)


function formSumbit(e){
  mostrar()
  e.preventDefault();
  
}



function capturaDatos(){
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let correo = document.getElementById('inputEmail').value;
    let direccion = document.getElementById('inputDireccion').value;
    
    guardarLocalStorage(nombre,apellido,telefono,direccion,correo);
 
}



function guardarLocalStorage(nom,ape,tel,dir,cor){

    localStorage.setItem('Nombre',nom);
    localStorage.setItem('Apellido',ape);
    localStorage.setItem('Teléfono',tel);
    localStorage.setItem('Dirección',dir);
    localStorage.setItem('Correo',cor);
    
    listarFormData();
} 


function listarFormData(){
    
    let nombre = localStorage.getItem('Nombre');
    let apellido = localStorage.getItem('Apellido');
    let telefono = localStorage.getItem('Teléfono');
    let direccion = localStorage.getItem('Dirección');
    let correo = localStorage.getItem('Correo');
    

    listarForm.innerHTML = `
    <table>
      <tr class = "tablan">
        <th>&nbsp;&nbsp;Nombre</th>
        <th>&nbsp;&nbsp;Apellido</th>
        <th>&nbsp;&nbsp;Correo</th>
        <th>&nbsp;&nbsp;Teléfono</th>
        <th>&nbsp;&nbsp;Dirección</th>
      </tr>
      <tr>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${correo}</td>
         <td>&nbsp;&nbsp;${telefono}</td>
         <td>&nbsp;${direccion}</td>
         
      </tr>
     </table>
    `;
}

function mostrar(){
     document.getElementById('contFormulario').style.display = "none";
     document.getElementById('fromBtn').style.display = "block";
}
function vol(){
  document.getElementById('contFormulario').style.display = "flex";
  document.getElementById('fromBtn').style.display = "none";
  document.querySelector("Form").reset();
  
}
let volver = document.getElementById('volver');
volver.addEventListener('click',vol)
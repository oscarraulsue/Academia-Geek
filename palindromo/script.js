


function palindromo(texto) {
  if (texto ===""){
  alert("el campo esta en vacio")
}
else{
    const x = texto.toLowerCase(); //cambio el texto a minusculas
    const a = x.replace(/\s/g, ''); //quito los espacios
    const c = a.split("").reverse().join(""); //invierto el array y cambiar a una palabra
  console.log(texto)
    if (a === c) {
      document.getElementById('cont3').innerHTML='la palabra ingresada es un palindromo';
    } else {
      document.getElementById('cont3').innerHTML='la palabra ingresada NO es un palindromo';
    }
}
  }
  function volver() {
    document.getElementById('palind').value='';
    document.getElementById('cont3').innerHTML='';
    
}



function palindromo(texto) {
  if (texto ===""){
  alert("el campo esta en vacio")
}
else{
    const x = texto.toLowerCase(); 
    const a = x.replace(/[\W_]/g, ""); 
    const c = a.split("").reverse().join(""); 
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



let boton1 = document.getElementById('btn1');
boton1.addEventListener('click', e => {
  convertirNumero()
})


function conversor(numero){
  let unidad="", decena="", centena="", umil="", romanos="";
  let convr = [];
romanos = numero

if (numero == 0 || numero >= 4000){
  document.getElementById('cont3').innerHTML='';
  alert('el numero ingresado no es unnumero valido, los numeros validos van de 1 a 3.999');
  
}
else if (romanos.length == 0){
  alert('el numero ingresado no es unnumero valido, los numeros validos van de 1 a 3.999');
  document.getElementById('cont3').innerHTML='';
}
else if (romanos.length > 0){
  switch (romanos[romanos.length-1]){
  case "1" :
  unidad = "I";
  break;
  case "2" :
  unidad = "II";
  break;
    case "3" :
  unidad = "III";
  break;
    case "4" :
  unidad = "IV";
  break;
    case "5" :
  unidad = "V";
  break;
    case "6" :
  unidad = "VI";
  break;
    case "7" :
  unidad = "VII";
  break;
    case "8" :
  unidad = "VIII";
  break;
    case "9" :
  unidad = "IX";
  break;
    
}
  switch (romanos[romanos.length-2]){
      
    case "1" :
  decena = "X";
  break;
    case "2" :
  decena = "XX";
  break;
    case "3" :
  decena = "XXX";
  break;
    case "4" :
  decena = "XL";
  break;
    case "5" :
  decena = "L";
  break;
    case "6" :
  decena = "LX";
  break;
    case "7" :
  decena = "LXX";
  break;
    case "8" :
  decena = "LXXX";
  break;
    case "9" :
  decena = "XC";
  break;
  }
  switch (romanos[romanos.length-3]){
      
    case "1" :
  centena = "C";
  break;
    case "2" :
  centena = "CC";
  break;
    case "3" :
  centena = "CCC";
  break;
    case "4" :
  centena = "CD";
  break;
    case "5" :
  centena = "D";
  break;
    case "6" :
  centena = "DC";
  break;
    case "7" :
  centena = "DCC";
  break;
    case "8" :
  centena = "DCCC";
  break;
    case "9" :
  centena = "CM";
  break;
  }
  switch (romanos[romanos.length-4]){
      
    case "1" :
  umil = "M";
  break;
    case "2" :
  umil = "MM";
  break;
    case "3" :
  umil = "MMM";
  break;
  }

}
  convr.push(umil,centena,decena,unidad);
  return convr.join("");
}



function convertirNumero(){
  ingreso = document.getElementById('numin').value;
  convr = conversor(ingreso);
  if (ingreso == 0 || ingreso >= 4000){
    document.getElementById('cont3').innerHTML='';   
  }
  else {
  document.getElementById('cont3').innerHTML= ingreso + ' en numeros romanos es: ' + convr;
  document.getElementById('numin').value='';
  }
}
function volver() {
  document.getElementById('numin').value='';
  document.getElementById('cont3').innerHTML='';
  
}
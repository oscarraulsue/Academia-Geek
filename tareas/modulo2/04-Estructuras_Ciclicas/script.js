let suma = 0;
let calif = 0;
let prom = 0;
let menor = [] ;
let cal = 0;
for(let i=1; i<=4; i++){
  calif = Number(prompt('Ingrese calificación'));

   suma += calif;
}

prom = suma/4;
alert('El promedio es: ' + prom.toFixed(2) + "" + menor);


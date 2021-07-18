const num1 = 5;
const num2 = 7;


let suma, resta, multi, div;  
let operacion = (prompt(`ingre`))

switch (operacion.toLocaleLowerCase()){
case 'suma':
suma = num1 + num2;
lert(`el resultado de la división es ${suma}`);
break;
case 'resta':
resta = num1 - num2;
alert(`el resultado de la división es ${resta}`);
break
case 'multiplicacion':
multi = num1 * num2;
alert(`el resultado de la multiplicación es ${multi}`);
break
case 'division':
div = num1 / num2;
alert(`el resultado de la división es ${div}`);
break
default:
    alert(`la opereacion indicada no es valida`);
}
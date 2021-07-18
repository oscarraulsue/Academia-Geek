let sueldo = 0;
let nombre = ( prompt ( 'Ingrese el nombre del empleado' ) ) ;
let horastrabajadass =  Number ( prompt ( 'Ingrese las horas trabajadas' ) ) ;
let valorhoras =  Number ( prompt ( 'Ingrese valor de las horas trabajadas' ) ) ;

sueldo = horastrabajadass * valorhoras;
alert (`El sueldo del empleado ${nombre} es: ${sueldo}`)

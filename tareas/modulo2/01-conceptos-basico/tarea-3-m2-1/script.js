

let tiempo = Number (prompt ('Ingrese el tiempo a cobrar')) ;
let valorhoras= Number ( prompt ( 'Ingrese valor por hora' ) ) ;
let montocobrar;

montocobrar = Math.ceil(tiempo) * valorhoras;
alert (`el monto a cobrar es: ${montocobrar} $`);
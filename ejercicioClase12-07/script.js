let salarioSemanal = 0;
let horasSemanales =  Number ( prompt ( 'Ingrese horas trabajadas en la semana' ) ) ;


if(horasSemanales <= 40){
salarioSemanal = horasSemanales * 16000

}
else {
    salarioSemanal = (((horasSemanales - 40) * 20000)+(40 * 16000))
}
alert(`su salario semanal es ${salarioSemanal} pesos`)
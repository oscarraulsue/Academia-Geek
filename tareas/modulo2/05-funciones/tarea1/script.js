let contPositivo = 0;
let contNegativo = 0;
let contNeutro =0;
let  num  =  Number ( prompt ( 'Ingrese número 1' ) ) ;
selector(num)
     num =  Number ( prompt ( 'Ingrese núm 2' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 3' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 4' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 5' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 6' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 7' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 8' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 9' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 10' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 11' ) ) ;
     selector(num)
     num =  Number ( prompt ( 'Ingrese núm 12' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 13' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 14' ) ) ;
     selector(num)
     num =  Number ( prompt ( 'Ingrese núm 15' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 16' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 17' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 18' ) ) ;
     selector(num)
     num  =  Number ( prompt ( 'Ingrese núm 19' ) ) ;
     selector(num)
     num =  Number ( prompt ( 'Ingrese número 20' ) ) ;
     selector(num)
     alert( `${contPositivo} Nmeros son positivos, ${contNeutro} Numeros son neutros y ${contNegativo} Numeros son negativos` ) ;
function selector(num){
    if (num > 0) {
contPositivo += 1;
    }
    else if(num === 0){
contNeutro += 1;
    }
    else{
        contNegativo += 1;
    }
}

capturarBotonSuma();
capturarBotonResta();
capturarBotonMultiplicacion();
capturarBotonDivision();
capturarBotonReset();

function capturarBotonSuma(){
    let botonSuma = document.getElementById('suma');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let suma = uno + dos + tres + cuatro + cinco + seis + siete + ocho + nueve + cero; 
        document.getElementById('resultado').value = suma;
    });
}

function capturarBotonResta(){
    let botonSuma = document.getElementById('resta');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let resta = uno - dos - tres - cuatro - cinco - seis - siete - ocho - nueve - cero; 
        document.getElementById('resultado').value = resta;
    });
}

function capturarBotonMultiplicacion(){
    let botonSuma = document.getElementById('multiplicacion');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let multiplicacion = uno * dos * tres * cuatro * cinco * seis * siete * ocho * nueve * cero; 
        document.querySelector('#resultado').value = multiplicacion;
    });
}

function capturarBotonDivision(){
    let botonSuma = document.getElementById('division');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let division = operacionDivision (uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,cero);
        resultados(division);
    });
}
uno.addEventListener('click', function (e) {
    let uno = Number(document.getElementById('uno').textContent);
    document.getElementById('resultado').textContent = uno;
})
function capturaUno(){
    let uno = Number(document.getElementById('uno').value);
    return button;
}

function capturaDos(){
    let dos = Number(document.getElementById('dos').value);
    return dos;
}

function capturaTres(){
    let tres = Number(document.getElementById('tres').value);
    return button;
}

function capturaCuatro(){
    let cuatro = Number(document.getElementById('cuatro').value);
    return button;
}

function capturaCinco(){
    let cinco = Number(document.getElementById('cinco').value);
    return button;
}

function capturaSeis(){
    let seis = Number(document.getElementById('seis').value);
    return button;
}

function capturaSiete(){
    let siete = Number(document.getElementById('siete').value);
    return button;
}

function capturaOcho(){
    let ocho = Number(document.getElementById('ocho').value);
    return button;
}

function capturNueve(){
    let nueve = Number(document.getElementById('nueve').value);
    return button;
}capturarBotonSuma();
capturarBotonResta();
capturarBotonMultiplicacion();
capturarBotonDivision();
capturarBotonReset();

function capturarBotonSuma(){
    let botonSuma = document.getElementById('suma');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let suma = uno + dos + tres + cuatro + cinco + seis + siete + ocho + nueve + cero; 
        document.getElementById('resultado').value = suma;
    });
}

function capturarBotonResta(){
    let botonSuma = document.getElementById('resta');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let resta = uno - dos - tres - cuatro - cinco - seis - siete - ocho - nueve - cero; 
        document.getElementById('resultado').value = resta;
    });
}

function capturarBotonMultiplicacion(){
    let botonSuma = document.getElementById('multiplicacion');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let multiplicacion = uno * dos * tres * cuatro * cinco * seis * siete * ocho * nueve * cero; 
        document.querySelector('#resultado').value = multiplicacion;
    });
}

function capturarBotonDivision(){
    let botonSuma = document.getElementById('division');
    botonSuma.addEventListener('click', function(){
        let uno = Number(document.getElementById('uno').value);  
        let dos = Number(document.getElementById('dos').value);  
        let tres = Number(document.getElementById('tres').value);  
        let cuatro = Number(document.getElementById('cuatro').value);  
        let cinco = Number(document.getElementById('cinco').value);  
        let seis = Number(document.getElementById('seis').value);  
        let siete = Number(document.getElementById('siete').value);  
        let ocho = Number(document.getElementById('ocho').value);  
        let nueve = Number(document.getElementById('nueve').value);  
        let cero = Number(document.getElementById('cero').value);  
        let igual = Number(document.getElementById('igual').value); 
        let division = operacionDivision (uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,cero);
        resultados(division);
    });
}

function capturaUno(){
    let uno = Number(document.getElementById('uno').textContent);
        return uno;
}

function capturaDos(){
    let dos = Number(document.getElementById('dos').value);
    return dos;
}

function capturaTres(){
    let tres = Number(document.getElementById('tres').value);
    return button;
}

function capturaCuatro(){
    let cuatro = Number(document.getElementById('cuatro').value);
    return button;
}

function capturaCinco(){
    let cinco = Number(document.getElementById('cinco').value);
    return button;
}

function capturaSeis(){
    let seis = Number(document.getElementById('seis').value);
    return button;
}

function capturaSiete(){
    let siete = Number(document.getElementById('siete').value);
    return button;
}

function capturaOcho(){
    let ocho = Number(document.getElementById('ocho').value);
    return button;
}

function capturNueve(){
    let nueve = Number(document.getElementById('nueve').value);
    return button;
}

function capturaCero(){
    let cero = Number(document.getElementById('cero').value);
    return button;
}

function operacionDivision(uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,cero){
    let division = uno / dos / tres / cuatro / cinco / seis / siete / ocho / nueve / cero;
    return division;
}

function resultados(resultado){
    documen.querySelector('#resultado').value = resultado;
}

function capturarBotonReset(){
    let reset = document.getElementById('reset');
    reset.addEventListener('click', function(){
        document.getElementById('uno').value = "";
        document.getElementById('dos').value = "";
        document.getElementById('tres').value = "";
        document.getElementById('cuatro').value = "";
        document.getElementById('cinco').value = "";
        document.getElementById('seis').value = "";
        document.getElementById('siete').value = "";
        document.getElementById('ocho').value = "";
        document.getElementById('nueve').value = "";
        document.getElementById('cero').value = "";
});
}

function capturaCero(){
    let cero = Number(document.getElementById('cero').value);
    return button;
}

function operacionDivision(uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,cero){
    let division = uno / dos / tres / cuatro / cinco / seis / siete / ocho / nueve / cero;
    return division;
}

function resultados(resultado){
    documen.querySelector('#resultado').value = resultado;
}

function capturarBotonReset(){
    let reset = document.getElementById('reset');
    reset.addEventListener('click', function(){
        document.getElementById('uno').value = "";
        document.getElementById('dos').value = "";
        document.getElementById('tres').value = "";
        document.getElementById('cuatro').value = "";
        document.getElementById('cinco').value = "";
        document.getElementById('seis').value = "";
        document.getElementById('siete').value = "";
        document.getElementById('ocho').value = "";
        document.getElementById('nueve').value = "";
        document.getElementById('cero').value = "";
});
}
console.log(capturaUno())
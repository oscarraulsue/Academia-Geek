let compra = 0;
let descuento = 0;
let total = 0;

 
function calcular() {
    
    cantidad = document.getElementById('cantidad').value;
    document.getElementById('divCalcular').style.display = "none";
    document.getElementById('Tabla').style.display = "block";

    console.log(cantidad);
    compra = cantidad * 820000;
    if (compra >= 1640000 && compra <= 3280000) {
        descuento = compra * .15;
        total = compra - descuento;
        document.getElementById('valorCompra').value = compra;
        document.getElementById('valorDescuento').value = descuento;
        document.getElementById('total').value = total;
        document.getElementById('cont3').innerHTML='Su compra tuvo un descuento del 15%';
    }
    else if (compra > 3280000 && compra <= 6560000) {
     descuento = compra * .25;
        total = compra - descuento;
        document.getElementById('valorCompra').value = compra;
        document.getElementById('valorDescuento').value = descuento;
        document.getElementById('total').value = total;
        document.getElementById('cont3').innerHTML='Su compra tuvo un descuento del 25%';
    }
    else if (compra > 6560000 && compra <= 9840000) {
     descuento = compra * .35;
        total = compra - descuento;
        document.getElementById('valorCompra').value = compra;
        document.getElementById('valorDescuento').value = descuento;
        document.getElementById('total').value = total;
        document.getElementById('cont3').innerHTML='Su compra tuvo un descuento del 35%';
    }
    else {
        descuento = 0;
        total = compra - descuento;
        document.getElementById('valorCompra').value = compra;
        document.getElementById('valorDescuento').value = descuento;
        document.getElementById('total').value = total;
        document.getElementById('cont3').innerHTML='Su compra no tuvo descuento';
    }
}
function volver() {
    document.getElementById('divCalcular').style.display = "block";
    document.getElementById('Tabla').style.display = "none";
}
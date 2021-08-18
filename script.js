function checkCashRegister(price, cash, cid) {

    const billetes = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1,];
  
    function transaction(price, cash, cid) {
      let vueltas = (cash - price) * 100;
      let billetera = [
      ["ONE HUNDRED", 0], 
      ["TWENTY", 0], 
      ["TEN", 0], 
      ["FIVE", 0], 
      ["ONE", 0], 
      ["QUARTER", 0], 
      ["DIME", 0], 
      ["NICKEL", 0], 
      ["PENNY", 0],
    ];
    let cambioD = [...cid].reverse().map(num => [num[0], num[1] * 100]);

    let dineroCaja = cambioD.reduce((a, b) => (a + b[1]),0) / 100;
 
    if (dineroCaja === vueltas / 100) {
      return {status: "CLOSED", change: [...cid]};
    }
    
    else{ 
    
    for (let i = 0; i < cambioD.length; i++) {

        while (billetes[i] <= vueltas && cambioD[i][1] > 0) {
 
          billetera[i][1] += billetes[i];
    
          vueltas -= billetes[i];
    
          cambioD[i][1] -= billetes[i];
        }
      }
    }

      let change = billetera

      .map(num => [num[0], num[1] / 100])

      .filter(num => num[1] !== 0);

      let changeTotal = change.reduce((a, b) => (a + b[1]),0);
    
      if (changeTotal < vueltas) {
          return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change};
    }
  
   
    let answer = transaction(price, cash, cid);
   
    return answer;
  };




  let positivo = 0;
let neutro = 0;
let negativo = 0;
for(let i=1; i<=20; i++){
    num =  Number ( prompt ( 'Ingrese un número' ) ) ;
    selector(num)
}

alert( `Nmeros positivos: ${positivo} Numeros neutros: ${neutro} Numeros negativos: ${negativo} ` ) ;

function selector(num){
    if (num > 0) {
positivo = positivo + 1;
    }
    else if(num === 0){
neutro = neutro + 1;
    }
    else{
negativo = negativo + 1;
    }
}
let positivo = 0;
let arreglo = [];

for(let i=1; i<=15; i++){
    num =  Number ( prompt ( 'Ingrese un número' ) ) ;
    selector(num)
}

alert( `Nmeros positivos: ${arreglo} ` ) ;

function convertidor(num){
    if (num > 0) {
      positivo = num * -1;
      arreglo.push(positivo);
    }
 
}
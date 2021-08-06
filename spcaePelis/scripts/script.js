import { data } from '../data/data.js';
import { dataEstrenos } from '../data/dataEstrenos.js'; 
import { dataSeries } from '../data/dataSeries.js';

// estrenos
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');
const detail = document.getElementById('detail');
const listaPelis = document.getElementById('listaPelis');

let movi = {};
let tabla = [];


document.addEventListener('DOMContentLoaded', () => {
    loadImage(dataEstrenos);
    listarTabla();
})

const loadImage = dataEstrenos => {

    dataEstrenos.forEach(movi => {

        const { id, name, image } = movi;

        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', image);
        templateCard.querySelector('img').dataset.id = id;

        const clone = templateCard.cloneNode(true);

        fragment.appendChild(clone)
    })

    items.appendChild(fragment);
}
// detalles estrenos

items.addEventListener('click', e => {
    let idTarget = e.target.dataset.id;
    desactivar()

    dataEstrenos.forEach(movi => {
  
        const { id, name, duracion, pais, año, genero, image, Estudios, estreno, reseña } = movi;

        if (id == idTarget) {

            const objeto = {
                id: id,
                name: name,
                duracion: duracion,
                pais: pais,
                año: año,
                genero: genero,
                image: image,
                Estudios: Estudios,
                estreno: estreno,
                reseña: reseña
            }

            localStorage.setItem("Movi", JSON.stringify(objeto));
            getmovi();
            tabla.push(objeto);
            localStorage.setItem('tabla', JSON.stringify(tabla));
            listarTabla();
        }
    })
    e.stopPropagation();
    e.preventDefault();
})
const listarTabla = () => {
    listaPelis.innerHTML = '';


    tabla = JSON.parse(localStorage.getItem('tabla'));
    tabla === null ? (tabla = []) : (
        tabla.forEach(element => {
            
            listaPelis.innerHTML +=
                `<br> <br>
         <div width="100vw" height="100" align="left">
         <span><img src="${element.image}"></span>
        <h2>${element.name}</h2>
         <span><button id="${element.id}">x</button></span>
         </div>`

        })
    )
}

listaPelis.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.innerHTML == 'x') {
        let id = e.target.id;
        deleteMovi(id);
    }

})


function deleteMovi(idI) {
    let indexArreglo;

    tabla.forEach((elemento, index) => {
        if (elemento.id == idI)
            indexArreglo = index;
    })

    tabla.splice(indexArreglo, 1);
    localStorage.setItem('tabla', JSON.stringify(tabla));

    listarTabla();
    
}

function getmovi() {
    detail.innerHTML = '';

    movi = JSON.parse(localStorage.getItem("Movi"));

    const { name, duracion, pais, genero, image, Estudios, estreno, reseña } = movi;

    detail.innerHTML = `
    <table border="5px" align="center">
    <tr>
        <td rowspan="3"  padding= "10%"  width="20%";><img src="${image}"></td>
        <td height= "28%"; text-align="left";  >
         <h2>${name}</h2>
         <h4>${reseña}</h4>
         <h5>${duracion}</h5>
         <h5>${genero}</h5>
         <h5>${Estudios}</h5>
         <h5>${estreno}</h5>
         <h5>${pais}</h5>

        </td>
    </tr>
</table>
    `
}
//peliculas
const templatenew = document.getElementById('template-new').content;
const fragment1 = document.createDocumentFragment();
const items1 = document.getElementById('items1');
const detail1 = document.getElementById('detail1');
const listaPelis1 = document.getElementById('listaPelis1');
const listaTotal1 = document.getElementById('listaTotal1');
let movi1 = {};
let tabla1 = [];


document.addEventListener('DOMContentLoaded', () => {
    loadImage1(data);
    listarTabla1();
})

const loadImage1 = data => {

    data.forEach(movi1 => {

        const { id, name, image } = movi1;

        templatenew.querySelector('h5').textContent = name;
        templatenew.querySelector('img').setAttribute('src', image);
        templatenew.querySelector('img').dataset.id = id;

        const clone = templatenew.cloneNode(true);

        fragment1.appendChild(clone)
    })

    items1.appendChild(fragment1);
}
// detalles peliculas

items1.addEventListener('click', e => {
    let idTarget1 = e.target.dataset.id;
    desactivar1()

    data.forEach(movi1 => {
  
        const { id, name, duracion, pais, año, genero, image, Estudios, estreno, reseña } = movi1;

        if (id == idTarget1) {

            const objeto1 = {
                id: id,
                name: name,
                duracion: duracion,
                pais: pais,
                año: año,
                genero: genero,
                image: image,
                Estudios: Estudios,
                estreno: estreno,
                reseña: reseña
            }

            localStorage.setItem("Movi1", JSON.stringify(objeto1));
            getmovi1();
            tabla1.push(objeto1);
            localStorage.setItem('tabla1', JSON.stringify(tabla1));
            listarTabla1();
        }
    })
    e.stopPropagation();
    e.preventDefault();
})
const listarTabla1 = () => {
    listaPelis1.innerHTML = '';

 
    tabla1 = JSON.parse(localStorage.getItem('tabla1'));
    tabla1 === null ? (tabla1 = []) : (
        tabla1.forEach(element => {
            
            listaPelis1.innerHTML +=
                `<br> <br>
         <div width="100vw" height="100" align="left">
         <span><img src="${element.image}"></span>
        <h2>${element.name}</h2>
         <span><button id="${element.id}">x</button></span>
         </div>`

        })
    )
}

listaPelis1.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.innerHTML == 'x') {
        let id1 = e.target.id;
        deleteMovi1(id1);
    }

})


function deleteMovi1(idI1) {
    let indexArreglo1;

    tabla1.forEach((elemento, index) => {
        if (elemento.id == idI1)
            indexArreglo1 = index;
    })

    tabla1.splice(indexArreglo1, 1);
    localStorage.setItem('tabla1', JSON.stringify(tabla1));
    listarTabla2();

}
function getmovi1() {
    detail1.innerHTML = '';

    movi1 = JSON.parse(localStorage.getItem("Movi1"));

    const { name, duracion, pais, genero, image, Estudios, estreno, reseña } = movi1;

    detail1.innerHTML = `
    <table border="5px" align="center">
    <tr>
        <td rowspan="3"  padding= "10%"  width="20%";><img src="${image}"></td>
        <td height= "28%"; text-align="left";  >
         <h2>${name}</h2>
         <h4>${reseña}</h4>
         <h5>${duracion}</h5>
         <h5>${genero}</h5>
         <h5>${Estudios}</h5>
         <h5>${estreno}</h5>
         <h5>${pais}</h5>
      
    </tr>
</table>
    `
}

//seires
const templatenew2 = document.getElementById('template-new2').content;
const fragment2 = document.createDocumentFragment();
const items2 = document.getElementById('items2');
const detail2 = document.getElementById('detail2');
const listaPelis2 = document.getElementById('listaPelis2');

let movi2 = {};
let tabla2 = [];


document.addEventListener('DOMContentLoaded', () => {
    loadImage2(dataSeries);
    listarTabla2();
})

const loadImage2 = dataSeries => {

    dataSeries.forEach(movi2 => {

        const { id, name, image } = movi2;

        templatenew2.querySelector('h5').textContent = name;
        templatenew2.querySelector('img').setAttribute('src', image);
        templatenew2.querySelector('img').dataset.id = id;

        const clone = templatenew2.cloneNode(true);

        fragment2.appendChild(clone)
    })

    items2.appendChild(fragment2);
}

// detalles series

items2.addEventListener('click', e => {
    let idTarget2 = e.target.dataset.id;
    desactivar2();

    dataSeries.forEach(movi2 => {
  
        const { id, name, duracion, pais, año, genero, image, Estudios, estreno, reseña } = movi2;

        if (id == idTarget2) {

            const objeto2 = {
                id: id,
                name: name,
                duracion: duracion,
                pais: pais,
                año: año,
                genero: genero,
                image: image,
                Estudios: Estudios,
                estreno: estreno,
                reseña: reseña
            }

            localStorage.setItem("Movi2", JSON.stringify(objeto2));
            getmovi2();
            tabla2.push(objeto2);
            localStorage.setItem('tabla2', JSON.stringify(tabla2));
            listarTabla2();
        }
    })
    e.stopPropagation();
    e.preventDefault();
})
const listarTabla2 = () => {
    listaPelis2.innerHTML = '';

 
    tabla2 = JSON.parse(localStorage.getItem('tabla2'));
    tabla2 === null ? (tabla2 = []) : (
        tabla2.forEach(element => {
            
            listaPelis2.innerHTML +=
                `<br> <br>
         <div width="100vw" height="100" align="left">
         <span><img src="${element.image}"></span>
        <h2>${element.name}</h2>
         <span><button id="${element.id}">x</button></span>
         </div>`

        })
    )
}

listaPelis2.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.innerHTML == 'x') {
        let id2 = e.target.id;
        deleteMovi2(id2);
    }

})


function deleteMovi2(idI2) {
    let indexArreglo2;

    tabla2.forEach((elemento, index) => {
        if (elemento.id == idI2)
            indexArreglo2 = index;
    })

    tabla2.splice(indexArreglo2, 1);
    localStorage.setItem('tabla2', JSON.stringify(tabla2));
    listarTabla2();
 
}
function getmovi2() {
    detail2.innerHTML = '';

    movi2 = JSON.parse(localStorage.getItem("Movi2"));

    const { name, reparto, pais, image, reseña } = movi2;

    detail2.innerHTML = `
    <table border="5px" align="center">
    <tr>
        <td rowspan="3"  padding= "10%"  width="20%";><img src="${image}"></td>
        <td height= "28%"; text-align="left";  >
         <h2>${name}</h2>
         <h4>${reseña}</h4>
         <h5>${reparto}</h5>
         <h5>${pais}</h5>
  
        </td>
    </tr>
</table>
    `
}

// funciones



function desactivar() {
    document.getElementById('items').style.visibility = "hidden";
    document.getElementById('detail').style.visibility = "visible";
    document.getElementById('items').style.display = "none";
    document.getElementById('detail').style.display = "inline";
}
detail.addEventListener('click', () => {
    document.getElementById('items').style.visibility = "visible";
    document.getElementById('detail').style.visibility = "hidden";
    document.getElementById('items').style.display = "flex";
    document.getElementById('detail').style.display = "none";
  

}) 
function desactivar1() {
    document.getElementById('items1').style.visibility = "hidden";
    document.getElementById('detail1').style.visibility = "visible";
    document.getElementById('items1').style.display = "none";
    document.getElementById('detail1').style.display = "inline";
}
detail1.addEventListener('click', () => {
    document.getElementById('items1').style.visibility = "visible";
    document.getElementById('detail1').style.visibility = "hidden";
    document.getElementById('items1').style.display = "flex";
    document.getElementById('detail1').style.display = "none";
  

}) 

function desactivar2() {
    document.getElementById('items2').style.visibility = "hidden";
    document.getElementById('detail2').style.visibility = "visible";
    document.getElementById('items2').style.display = "none";
    document.getElementById('detail2').style.display = "inline";
}
detail2.addEventListener('click', () => {
    document.getElementById('items2').style.visibility = "visible";
    document.getElementById('detail2').style.visibility = "hidden";
    document.getElementById('items2').style.display = "flex";
    document.getElementById('detail2').style.display = "none";
  

}) 

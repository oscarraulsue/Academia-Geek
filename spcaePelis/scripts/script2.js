import {data} from '../data/data.js';
import {dataEstrenos} from '../data/dataEstrenos.js';


// estrenos
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');
const detail = document.getElementById('detail');
const detail2 = document.getElementById('detail2');

let movi = { };



document.addEventListener('DOMContentLoaded', () => {
     loadImage(dataEstrenos);
})

const loadImage = dataEstrenos => {

   dataEstrenos.forEach(movi => {
  
       const {id,name,duracion,pais,genero,image, estreno,reseña} = movi;

       templateCard.querySelector('h3').textContent = name;
       templateCard.querySelector('img').setAttribute('src',image);
       templateCard.querySelector('img').dataset.id = id;
       templateCard.getElementById('nam').textContent = name;
       templateCard.getElementById('dur').textContent = duracion;
       templateCard.getElementById('desc').textContent = reseña;
       const clone = templateCard.cloneNode(true);

       fragment.appendChild(clone)
   } )
   
   items.appendChild(fragment);
}
// detalles estrenos

items.addEventListener('click', e => {
    let idTarget = e.target.dataset.id;
    desactivar()
    
    dataEstrenos.forEach(movi => {
 
        const {id,name,duracion,pais,año,genero,image2,Estudios,estreno,reseña} = movi;
 
        if(id == idTarget){
 
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
                reseña: reseña,
                image2: image2
            }
            localStorage.setItem("Movi",JSON.stringify(objeto));
            getmovi();
            localStorage.setItem("Movi",JSON.stringify(objeto));
            getmovi1();
        }   
    })
    e.stopPropagation();
    e.preventDefault();
 })
 
 
 function getmovi(){
     detail.innerHTML = '';
     movi = JSON.parse(localStorage.getItem("Movi")); 
   
     const {image2} = movi;
 
     detail.innerHTML = `
   
         <img src="${image2}"></td>
 
     `
 }
 function desactivar(){
     document.getElementById('carouselExampleSlidesOnly').style.display = "none";
     document.getElementById('body').style.display = "none";
     document.getElementById('detail').style.display = "inline";
 }
 
  function getmovi1(){
      detail2.innerHTML = '';
 
      movi = JSON.parse(localStorage.getItem("Movi")); 
 
      const {name,duracion,pais,genero,Estudios,estreno,reseña} = movi;
 
      detail2.innerHTML = `
      <table border="5px" >
      <tr>
          <td rowspan="3"></td>
          <td   >
           <h2>${name}</h2>
           <br>
           <h4>${reseña}</h4>
           <br>
           <h5>Duracion: ${duracion}</h5>
           <h5>Genero: ${genero}</h5>
           <h5>Estudios: ${Estudios}</h5>
           <h5>Estrenos: ${estreno}</h5>
           <h5>País: ${pais}</h5>
  
          </td>
      </tr>
  </table>
      `
  }
 
//peliculas
const templatenew = document.getElementById('template-new').content;
const fragment1 = document.createDocumentFragment();
const items1 = document.getElementById('items1');
const detail3 = document.getElementById('detail3');
const detail4 = document.getElementById('detail4');

let movi1 = { };


document.addEventListener('DOMContentLoaded', () => {
     loadImage1(data);
})

const loadImage1 = data => {

   data.forEach(movi1 => {
  
       const {id,name,duracion,image,reseña} = movi1;

       templatenew.querySelector('h3').textContent = name;
       templatenew.querySelector('img').setAttribute('src',image);
       templatenew.querySelector('img').dataset.id = id;
       templatenew.getElementById('nam1').textContent = name;
       templatenew.getElementById('dur1').textContent = duracion;
       templatenew.getElementById('desc1').textContent = reseña;
       const clone = templatenew.cloneNode(true);

       fragment1.appendChild(clone)
   } )
   
   items1.appendChild(fragment1);
}
// detalles peli

items1.addEventListener('click', e => {
    let idTarget1 = e.target.dataset.id;
    desactivar1()
    
    data.forEach(movi1 => {
 
        const {id,name,duracion,pais,año,genero,image2,Estudios,estreno,reseña} = movi1;
 
        if(id == idTarget1){
 
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
                reseña: reseña,
                image2: image2
            }
            localStorage.setItem("Movi1",JSON.stringify(objeto1));
            getmovi2();
            localStorage.setItem("Movi1",JSON.stringify(objeto1));
            getmovi3();
        }   
    })
    e.stopPropagation();
    e.preventDefault();
 })
 
 
 function getmovi2(){
     detail3.innerHTML = '';
     movi1 = JSON.parse(localStorage.getItem("Movi1")); 
   
     const {image2} = movi1;
 
     detail3.innerHTML = `
   
         <img src="${image2}"></td>
 
     `
 }
 function desactivar1(){
     document.getElementById('carouselExampleSlidesOnly').style.display = "none";
     document.getElementById('body').style.display = "none";
     document.getElementById('detail3').style.display = "inline";
 }
 
  function getmovi3(){
      detail4.innerHTML = '';
 
      movi1 = JSON.parse(localStorage.getItem("Movi1")); 
      const {name,duracion,pais,genero,Estudios,estreno,reseña} = movi1;
 
      detail4.innerHTML = `
      <table border="5px" >
      <tr>
          <td rowspan="3"></td>
          <td   >
           <h2>${name}</h2>
           <br>
           <h4>${reseña}</h4>
           <br>
           <h5>Duracion: ${duracion}</h5>
           <h5>Genero: ${genero}</h5>
           <h5>Estudios: ${Estudios}</h5>
           <h5>Estrenos: ${estreno}</h5>
           <h5>País: ${pais}</h5>
  
          </td>
      </tr>
  </table>
      `
  }



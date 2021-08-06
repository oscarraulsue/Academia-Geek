import {dataSeries} from '../data/dataSeries.js';



// Series
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');
const detail = document.getElementById('detail');
const detail2 = document.getElementById('detail2');

let movi = { };



document.addEventListener('DOMContentLoaded', () => {
     loadImage(dataSeries);
})

const loadImage = dataSeries => {

   dataSeries.forEach(movi => {
  
       const {id,name,duracion,pais,reparto,image, estreno,reseña} = movi;

       templateCard.querySelector('h3').textContent = name;
       templateCard.querySelector('img').setAttribute('src',image);
       templateCard.querySelector('img').dataset.id = id;
       templateCard.getElementById('nam').textContent = name;

       templateCard.getElementById('desc').textContent = reseña;
       const clone = templateCard.cloneNode(true);

       fragment.appendChild(clone)
   } )
   
   items.appendChild(fragment);
}
// detalles Series

items.addEventListener('click', e => {
    let idTarget = e.target.dataset.id;
    desactivar()
    
    dataSeries.forEach(movi => {
 
        const {id,name,reparto,pais,image2,reseña} = movi;
 
        if(id == idTarget){
 
            const objeto = {
                id: id,
                name: name,
                reparto: reparto,
                pais: pais,

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
 
      const {name,reparto,pais,reseña} = movi;
 
      detail2.innerHTML = `
      <table border="5px" >
      <tr>
          <td rowspan="3"></td>
          <td   >
           <h2>${name}</h2>
           <br>
           <h4>${reseña}</h4>
           <br>
           <h5>Reparto: ${reparto}</h5>
           <h5>País: ${pais}</h5>
  
          </td>
      </tr>
  </table>
      `
  }
import {rutas,select1, select2, select3,divMostrar,objetoPqsi} from '../modulos/modulos.js';

for (let i = 0; i < rutas.length;i++) {
    const opcion=document.createElement('option');
    opcion.innerHTML=rutas[i].nombre;
    select1.appendChild(opcion);
       
   }
   for (let i = 0; i < rutas.length;i++) {
    const opcion=document.createElement('option');
    opcion.innerHTML=rutas[i].maxKilometros;
    select3.appendChild(opcion);
       
   }

   for (let i = 0; i < rutas.length;i++) {
    const opcion=document.createElement('option');
    opcion.innerHTML=rutas[i].minKilometros;
    select2.appendChild(opcion);
       
   }
//------------------------------------------------------
//esta esta bien------------------------------------
   select1.addEventListener('change',(rutaSeleccionada)=>{
    divMostrar.innerHTML = '';
rutas.forEach(element => {
    if(rutaSeleccionada.target.value===element.nombre){
    divMostrar.innerHTML=`<h4>Nombre: ${element.nombre}</h4>
    <h4>minKM: ${element.minKilometros}</h4>s
    <h4>maxKM: ${element.maxKilometros}</h4>
    <h4>estado: ${element.estado}</h4>
    <h4>calificacion: ${element.calificacion}</h4>`;
    }
});

});

//---------------------------------------------------

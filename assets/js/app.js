import {rutas,select1, select2, select3,select4,select5,select6,divMostrar,datosBusqueda} from '../modulos/modulos.js';

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
//esto esta bien------------------------------------
   select1.addEventListener('change',(rutaSeleccionada)=>{
    divMostrar.innerHTML = '';
rutas.forEach(element => {
    if(rutaSeleccionada.target.value===element.nombre){
    divMostrar.innerHTML=`<h4>Nombre: ${element.nombre}</h4>
    <h4>minKM: ${element.minKilometros}</h4>
    <h4>maxKM: ${element.maxKilometros}</h4>
    <h4>estado: ${element.estado}</h4>
    <h4>calificacion: ${element.calificacion}</h4>`;
    }
});

});

//---------------------------------------------------
//filtros:
select2.addEventListener('change',(z)=>{
    console.log('escogiste esta opcion')
    console.log(z.target.value);
    datosBusqueda.minKilometros = z.target.value;
    console.log(datosBusqueda);
})
select3.addEventListener('change',(z)=>{
    console.log('escogiste esta opcion')
    console.log(z.target.value);
    datosBusqueda.maxKilometrosKilometros = z.target.value;
    console.log(datosBusqueda);
})
select4.addEventListener('change',(z)=>{
    console.log('escogiste esta opcion')
    console.log(z.target.value);
    datosBusqueda.estado = z.target.value;
    console.log(datosBusqueda);
})
select5.addEventListener('change',(z)=>{
    console.log('escogiste esta opcion')
    console.log(z.target.value);
    datosBusqueda.calificacion = z.target.value;
    console.log(datosBusqueda);
})
select6.addEventListener('change',(z)=>{
    console.log('escogiste esta opcion')
    console.log(z.target.value);
    datosBusqueda.tipoVia = z.target.value;
    console.log(datosBusqueda);
})




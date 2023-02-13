//operador condicional ternario

const activo = true;
/*let mensaje='';
if(!activo){
    mensaje='Activo';
}else{
    mensaje='Inactivo';
}*/

// ternario con las 2 opciones
//const mensaje = (activo)? 'Activo':'Inactivo';
//operador ternario con nulls
//const mensaje = (!activo)?'Activo':null;
// solo devuelve que la seccion del fragmento true
const mensaje = activo && 'Activo'
console.log(mensaje)
// desestructuracion de objetos
// asignacion desestructurante


const persona={
    nombre:'Tony',
    edad:45,
    clave:'Iroman',
};
// desestrucutracion d epropiedad mediante la asignacion de un objeto
const {nombre,edad, clave}= persona;

console.log(nombre);
console.log(edad);
console.log(clave);
 
// si no tiene la propiedad usa una por defecto
const retornaPersona=({nombre,edad,rango='Capitan'})=>{
    // desestructuracion de propiedades 
    //en funciones flecha que recibe por 
    //parametro un objeto y saca las propiedades que necesita
    console.log(nombre,edad, rango);
};

retornaPersona(persona)


const datos=({clave,nombre,edad,rango='Capitan'})=>{
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.4654654,
            lng:14.7984565
        }
    }
};

// extraer objetos anidados y de manera contrate que no es de manera constante
const {nombreClave,anios,latlng:{lat,lng}}=datos(persona);
console.log(nombreClave,anios)
console.log(lat,lng)


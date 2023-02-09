// objetos literales o diccionario
// documentacion con , al final como buena practica
const persona ={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:5154656,
        lat:14.56895,
        lng:34.56566,
    }
};
//mostrar en formato tabla
//console.table(persona)
// copia de la referencia en memoria
// ... es para hacer copias del objeto como tal
const persona2= {...persona};
persona2.nombre='peter';
console.log(persona2);
console.log(persona);

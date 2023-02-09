// funciones en js

const saludar= function saludar(nombre){
    return `hola, ${nombre}`
}

// funciones de fecha

const saludar2 = (nombre)=>{
    return `hola, ${nombre}`
}

const saludar3 = (nombre)=> `hola, ${nombre}`;
const saludar4=()=>`Hola mundo`
//console.log(saludar('Goku'))
console.log(saludar);
console.log(saludar2('Ximena'));
console.log(saludar3('Lorena'));
console.log(saludar4())

const getUser=()=>( {
        uid:'ABC12345',
        username:'El_protector',
    })

const user = getUser();
console.log(user);

function getUsuarioActivo(nombre){
    return {
        uid:'ABC123456',
        username: nombre,
    }
}

const usuarioActivo= getUsuarioActivo('Fernando');
console.log(usuarioActivo);

// tarea
// 1 tyransforma a funcion fecha
// 2 retornar un objeto implicito
// pruebas

// ----- 1 tranformar a funcion flecha
const getUserActive=(nombre)=>{
    return{
        uid:'ABC123156',
        username:nombre,
    }
}

const userac= getUserActive('Lorena');


// 2 retornar un objeto implicito

const getUserActi=(nombre)=>({
    uid:'as54646',
    username:nombre
})

const userActi= getUserActi('Natalie');

// 3 pruebas del ejercicio
// retorna en funcion flecha
console.log(userac);
// retorna en objeto implicito
console.log(userActi)
// templates string

const nombre ='Fernando';
const apellido='Herrera';
// no debe ir la concatenacion
//const nombreCompleto= nombre + ' '+ apellido;
//ejercicio con template string
const nombreCompleto=`${nombre} ${apellido} ${1+1}`

console.log(nombreCompleto);


function getSaludo(name){
    return 'Hello Word ' + name;
}

console.log(`Este es un saludo ${getSaludo(nombreCompleto)}`)
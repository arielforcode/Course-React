// desestructuracion de arreglos
//asignacion desestructurante de reglos

const personajes=['Goku','Vegeta','Trunks'];
const [,,p3]= personajes;
console.log(p3);


const retornArreglo=()=>{
    return ['ABC',123]
};

const [letras,numeros] = retornArreglo();

console.log(letras,numeros)

//tarea 

const dat =(valor)=>{
    return [valor,()=>{console.log('hola mundo')}];
}

const [nombre,setNombre] = dat('Goku');
console.log(nombre)
setNombre();
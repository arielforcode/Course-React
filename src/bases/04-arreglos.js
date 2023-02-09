// areglos en javascript - coleccion de informacion en una sola variable
//const arreglo= new Array( 100 );
const arreglo =  [1,2,3,4];
/* arreglo.push(1);
arreglo.push(2);
arreglo.push(4);
arreglo.push(3); */

// operador spread "..."
let arreglo2 = [...arreglo,5];
//arreglo2.push(5)
const arreglo3 = arreglo2.map(function(number){
   // funcion callback crea un nuevo arreglo
    return number*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


import { getHeroeById } from "./bases/08-import-export";
/* const promesa = new Promise( (resolve,reject)=>{

    setTimeout(() => {
        //tarea
        const heroe=getHeroeById(1);
        resolve(heroe);
        //reject('no se pudo encontrar el heroe');
    }, 2000);
});

promesa.then( (heroe)=>{
    console.log('heroe',heroe);
}).catch(error=>console.warn(error)); */

const getHeroeByIdAsync=(id)=>{
    return new Promise( (resolve,reject)=>{

        setTimeout(() => {
            //tarea
            const heroe=getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('no se pudo encontrar el heroe')
            }
        }, 2000);
    });
};

getHeroeByIdAsync(1)
// agarra el primer valor que encuntra por then
.then(console.log)
// agarra el primer valor que recibe del error
.catch(console.warn)
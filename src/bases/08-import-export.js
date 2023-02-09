//import { heroes} from './data/heroes';
//import { heroes } from "./data/heroes";

import heroes  from '../data/heroes'

/* const getHeroe =(id)=>{
    return  heroes.find((heroe)=>{
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
    });
} */

//console.log(owners)
// find deveulve el boleano si existe o no
export const getHeroeById =(id)=> heroes.find((heroe)=> heroe.id === id)
//console.log(getHeroe(1));
// filter devuelve la lista de areglos que cumplen una condicion de algun objeto
export const getHeroesByOwner =(owner)=> heroes.filter((heroe)=> heroe.owner === owner);
//console.log(getHeroesByOwner('Marvel'))
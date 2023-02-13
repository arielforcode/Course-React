// async-await
/*
const getImgenPromesa =() =>{
    const promesa = new Promise((resolve,reject)=>{
        resolve('https://facebook.com')
    })
    return promesa
}

getImgenPromesa().then(console.log)*/

// usar el async dentro de una funcion de await
const getImagen = async () => {
    try{
        const apiKey = 'FEMnCcYZ4Hk4Tkdg1VptrZRYZGY5Z1HV';
        // se hace una peticion con fetch para consultar al endpoint pero devuelve una promesa
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url}= data.images.original;
        const img= document.createElement('img');
        img.src=url;
        document.body.append(img);
        
    }catch(error){
        // manejo de errores
        console.error(error)
    }
    
}

getImagen().then(console.log);



const apiKey= 'FEMnCcYZ4Hk4Tkdg1VptrZRYZGY5Z1HV';
// se hace una peticion con fetch para consultar al endpoint pero devuelve una promesa
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// en la promesa podemos resolverla con un then y un catch sin encadenar la promesa
/*peticion.then(resp =>{
    console.log(resp);
    // posetiro a eso tenemos que sacar los datos con otra promesa de redeble stream 
    resp.json().then(data =>{
        // imprimimos la data
        console.log(data);

    })
})
.catch(console.warn)*/

// encadenando las promesas
peticion
.then (resp =>resp.json())
.then(({data}) => {
    
    // aplicacndo desestructuracion para obtener la url
    const {url}= data.images.original;
    const img= document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(console.warn)

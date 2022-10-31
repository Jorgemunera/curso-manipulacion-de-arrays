//sin el forEach
//vemos que tenemos varias lineas de codigo para hacer el recorrido con un cicle for

const letters=['a','b','c'];
for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    console.log('for',element);
}

//con metodo forEach

letters.forEach(item=>console.log('forEach',item));
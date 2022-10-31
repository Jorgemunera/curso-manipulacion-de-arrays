//map(): es inmutable, lo que hace es generar un nuevo array con la transformacion, podemos tener arrow function o funciones declarativas

const letters=['a','b','c','d'];

//como se hace con for
const newArray=[];
for (let i = 0; i < 4; i++) {
    const element=letters[i];
    newArray.push(element + '++');   
}
console.log('original',letters);
console.log('modificado',newArray);

//como se hace con map
const newArray2=letters.map(item=>item + '++');
console.log('modificado',newArray2);
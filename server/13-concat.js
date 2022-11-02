//METODO CONCAT: vamos a fusionarlo
const elements=[1,1,2,2];
const elements2=[3,3,4,4];

//con for

const newArray=[...elements];//el spread operation nos ayuda a clonar sin que haya modificacion en referencia en memoria de elements
for (let index = 0; index < elements2.length; index++) {
    const element = elements2[index];
    newArray.push(element)
}
console.log(newArray);

//con concat
const newArray2=elements.concat(elements2)
console.log(newArray2);

//otra forma con spread operations
const newArray3=[...elements, ...elements2];
console.log(newArray3);

//cuidado con el spread operator para esta funcion, ya que siempre me tomara el objeto como elementos de un array, y si le pasamos un string, cada estring sera parte de ese array
const newArray4=[...elements,...'random'];
console.log(newArray4);

//si quiero mutar el array original, haciendo referencia a elements ya modificaria en memoria ese valor inicial de este array
elements.push(...elements2)
console.log(elements);

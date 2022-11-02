//queremos sintetizar todo en un solo array de un nivel
const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

//con for:, pero que pasa si hay otro array dentro de uno de los arrays internos.., tendriamos que hacer otro for en k y recorrer ese otro array, pero si hay otro?, nos veriamos muy limitados con ciclos for
const newArray=[];
for (let i = 0; i < matriz.length; i++) {
    const arrayInt = matriz[i];
    for (let j = 0; j < arrayInt.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    } 
}
console.log(newArray);


const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2]],
    [7,8,9],
];

//con flat: no importa cuantos niveles haya el lo va a aplanar

const rta=matriz2.flat(3);
console.log(rta);
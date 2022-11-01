//queremos sumar este array de totales
const totals=[1,2,3,4];

//con for
let suma=0;
for (let i = 0; i < totals.length; i++) {
    suma+=totals[i];
}
console.log(suma);

//con reduce
const rta=totals.reduce((suma, item)=>suma+item, 0);//reduce, tendra dos parametros, el primero es una arrow function con el primer atributo es el acumulador, y al igual que con for, suma debe tener un estado inicial, este seria nuestro segundo paramertro

console.log('rta',rta);
//queremos hacer un join, unirlos con un separador en especifico
const elements = ['Fire', 'Air', 'Water'];

//con for
let rta='';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
   if(index!==elements.length-1){
    rta+=element+'--';
   }else{
    rta+=element;
   }
}
console.log(rta);

//con join
const word=elements.join('--');
console.log(word);

//SPLIT: por algun patron quiero separar una cadena de texto en un array

const tittle='Curso de manipulacion de arrays';
console.log(tittle.split(' '));//dentro va el patron de separacion, a partir de este iniciara a separar en el array, en este caso es un espacio

//encadenando el split, join y tolowercase
const newTittle='Curso de manipulacion de arrays';
console.log(newTittle.split(' ').join('-').toLowerCase());

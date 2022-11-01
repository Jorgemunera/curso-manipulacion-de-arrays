//quiero saber si todos son menores a 40
const numbers = [1,30,49,29,10,13];

//con for
let rta=true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element>=40){
        rta=false;
    }
}
console.log(rta);

//con every
const rta2=numbers.every(item=>item<=40);
console.log(rta2);

const numbers2 = [1,30,24,29,10,13];
const rta3=numbers2.every(item=>item<=40);
console.log(rta3);
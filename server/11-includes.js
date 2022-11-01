//ecesitamos verificar si un objeto existe o no en el pets
const pets=['cat', 'dog', 'bat'];

//con for
let includeInArray=false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element==='dog'){
        includeInArray=true;
        break;
    }
}
console.log(includeInArray);

//con includes
const rta=pets.includes('dog');
console.log(rta);
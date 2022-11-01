const numbers = [1,30,49,29,10,13];

//con for
let rta=undefined;
for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index];
    if(element === 30){
        rta=element;
        break;
    } 
}
console.log(rta)

//con find
const rta2=numbers.find(item=>item===24);
console.log(rta2)

//ejemplo con array de objetos
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta3=products.find(item=>item.id==='🍔');
console.log(rta3)

//hay otro metodo findindex que nos devuelve la posicion en la que se encuentra

const rta4=products.findIndex(item=>item.id==='🍔');
console.log(rta4)



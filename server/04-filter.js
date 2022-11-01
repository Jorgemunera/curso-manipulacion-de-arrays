const words = ["spray", "elites", "limit", "apple", "exuberant"]

// Queremos hacer un filtro: en el eje quiere seleccionar las palabras con mas de 6 caracteres

//con un FOR
const newArray=[];
for (let i = 0; i < words.length; i++) {
    const item=words[i];
   if(item.length>=6){
    newArray.push(item);
   }
}
console.log('newArray',newArray);
console.log('original',words);

//con FILTER

const newArray2=words.filter(item=>item.length>=6)
console.log('newArray2',newArray2);
console.log('original',words);

//otro ejemeplo con FILTER MAS COMPLEJO: queremos obtener todas las ordenes de compra que fueron entregadas

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 300,
        delivered: false,
      }
  ];

  const newArray3=orders.filter(object=>object.delivered==true)
  console.log('newArray3',newArray3)

    //nuevo filtro, que hayan sido entregadas y un valor de mas de 100
  const newArray4=orders.filter(object=>object.delivered==true && object.total>100)
  console.log('newArray4',newArray4)

  //si tenemos una base de datos lo mejor es dejar esos filtros al lenguaje de la base de datos


  //otro ejemplo: quiero hacer un buscador de las ordenes por nombre, quiero ver que depende de un query cuales ordenes tienen el nomvbre de ese cliente

  const search=(query)=>{
    return orders.filter(item=>{
        return item.customerName.includes(query)
    })
  }
  
console.log(search('Nico'));

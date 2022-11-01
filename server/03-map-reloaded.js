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
  ]
  console.log('original',orders);
  const newArray=orders.map(item=>item.total);
  console.log('nuevo array',newArray);

  //aqui queremos agregar un nuevo atributo a cada uno de los objetos
//   const newArray2=orders.map(item=>{
//     item.tax=.19;
//     return item;
//   });
  //aqui podemos ver, que en este caso se genera una mutacion del array original, porque si map no modifica? en el ewArray2 lo que estamos haciendo es creando una modigficcion en memoria, entonces cuando estamos corriend map y solo pasa con objetos no pasa con valores primitivos, cada uno de esos objetos tiene una referencia en memoria y cuando copia no cipia como tal un nuevo elemento a menos que haya cambiado, pero cuando estamos trabajando con objetos y retornamos el mismo objeto, asi lo hayamos modifcado con un nuevo atributo pero es el mismo objeto (item), estamos modificando la referencia en memoria, lo cual hace que el otro array original si sea cambiado o haya mutado
//   console.log('original',orders);
//   console.log('nuevo array 2',newArray2);
  
  const newArray3=orders.map(item=>{
    return {
        ...item, tax: .19
    };
  });

  console.log('original',orders);
  console.log('nuevo array 3',newArray3);
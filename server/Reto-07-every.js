//reto1: Evaluar si todos los miembros de este equipo sean menores de 15 años
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const consulta=team.every(obj=>obj.age<=15);
  console.log(consulta);

  //reto 2: En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array todos los números son pares.

  function checkArray(array) {
    if(array.length===0){
        return false;
    }
   return array.every(item=>item%2===0);
  }
  console.log(checkArray([]));
  
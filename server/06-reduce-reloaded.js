//mostrar que reduce tambien puede retornar un objeto, ya que un valñor tambien puede ser un objeto

const items=[1,3,2,3,3,1,6];

const rta=items.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1;
    }else{
        obj[item]=obj[item]+1;
    }
    return obj;
},{});

console.log(rta);

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];
//aqui estamos concatenando dos metodos donde la entrada de uno es la salida del otro, el primero que es map, nos va a devolver un array con los niveles y el segundo va a reducir a un solo objeto de 3 atributos donde va a contar cuantos de cada uno hay
  const rta1=data
  .map(item=>item.level)
  .reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=1;
    }else{
        obj[item]=obj[item]+1;
    }
    return obj;
    },{});

    console.log(rta1)
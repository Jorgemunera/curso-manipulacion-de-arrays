const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
  ];

  //queremos obtener un array completo de todos los atributos de mis usuarios

  //con map y flat por separado
  const rta=users.map(user=>user.attributes).flat();
  console.log(rta);

  //con flatmap

  const rta2=users.flatMap(user=>user.attributes);
  console.log(rta2);
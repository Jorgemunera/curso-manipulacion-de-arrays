//utilizaremos some para determnionar si al menos algun numero del arreglo es par
const numbers=[1,2,3,4];

//con for
let respuesta=false;
for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if(element%2===0){respuesta=true; break;}
    else{respuesta=false}
}
console.log(respuesta);


//con some

const respuesta2=numbers.some(item => item%2===0);
console.log(respuesta2);

//utilizando some con objetos: al menos una orden fue entregada?

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
  const respuesta3=orders.some(item => item.delivered==true);
console.log(respuesta3);

//otro ejemplo some 

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
  };
//vamos a utilizar una libreria que se llama date-fns y nos va a ayudar a saber si dos fechas colisionan entre si, date-fns es una familia de funciones pensada para hacer manipulacion de fechas en javascript, es liviana, ya que no trae el impacto de toda la libreria hacia tu aplicacion sino solo las que utilices, en este caso solo queremos utilizar una, en este caso areIntervalsOverLapping

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap =(newdate)=>{
    return dates.some(date=>{
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newdate.startDate, end: newdate.endDate},
        )
    })
}

console.log(isOverlap(newAppointment));

    
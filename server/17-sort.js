const months = ["March", "Jan", "Feb", "Dec"];
months.sort();//lo ordena por abecedario de manera automatica de acuerdo al codigo ASCI
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();//ordena de acuerdo a ASCI tambien
console.log(numbers);

const numbers2 = [1, 30, 4, 21, 100000];
numbers2.sort((a,b)=>a-b);//podemos modificar la manera en que lo ordena, mandamos una arrow function con 2 parametros ya que necesita comparar a-b de mayor a menor, b-a de mayor a menor
console.log(numbers2);


const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();//en verciones de navegadores modernos se organiza de acuerdo a ASCI, pero en navegadores no actualizados es necesario utilizar una arrow function con dos parametros a y b y colocar a.localCompare(b)
console.log(words);


const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b)=> b.total - a.total);//queremos ordenar por total de compras de mayor a menor, si lo queremos de menor a mayor a.total - b.total
console.log(orders);
const numbers=[4,7,9,2,2,3,4,5,9,9,8,7,8,9,10,1,9,10,2,4,5,9,10,10,2,3,3,3,7,4,2,7,8,4,5,6,6,6,4,2];

const rango=(x,min,max)=> x >= min && x <= max;
const cuantoDeCadarango=numbers.reduce((contador,item)=>{
    if(rango(item,1,5)) contador["1-5"] +=1;
    if(rango(item,6,8)) contador["6-8"] +=1;
    if(rango(item,9,10)) contador["9-10"] +=1;
    return contador;
},{"1-5":0,"6-8":0,"9-10":0});

console.log(cuantoDeCadarango);






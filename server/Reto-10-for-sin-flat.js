const matriz = [
    [1,2,3],
    [4,5,6, [1,2]],
    [7,8,9],
];

const arrayFinal=[];
for (let i = 0; i < matriz.length; i++) {
    const int1 = matriz[i];
    if(typeof int1=='object'){
        for (let j = 0; j < int1.length; j++) {        
            const int2 = int1[j];
            if(typeof int2=='object'){
                for (let k = 0; k < int2.length; k++) {
                    const int3 = int2[k];
                    arrayFinal.push(int3);
                }
            }else{
                arrayFinal.push(int2);
            }     
        }       
    } else{
        arrayFinal.push(int1);
    }
}
console.log(arrayFinal);

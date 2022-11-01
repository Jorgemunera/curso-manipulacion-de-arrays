//Tienes un array de números y debes retornar la suma de todos los valores en él.

//La solución debería tener un input y output como los siguientes:

function calcSum(array) {
    return array.reduce((suma,item)=>suma+item,0)
  }

console.log(calcSum([1, 1, 1]));
console.log(calcSum([2, 4, 8]));
console.log(calcSum([]));
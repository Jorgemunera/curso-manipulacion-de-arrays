//En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array al menos uno es un número par.

function checkArray(array) {
    return array.some(item=>item%2===0)
}
//Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

//La solución debería tener un input y output como los siguientes:



function filtrar(array){
    return array.filter(item=>item.length>=4)
}

console.log(filtrar(['amor', 'sol', 'piedra', 'día']))
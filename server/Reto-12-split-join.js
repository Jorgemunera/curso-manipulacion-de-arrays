//En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

function countWords(array) {
    if(array.length===0){
        return 0;
    }else{
        let arrayWords=array.join(' ').split(' ')
    return arrayWords.length;
    }  
}
console.log(countWords(['hola como estas','tu']));

/* 
Dados primitivos js (imutaveis) = string, number, boolean, undefined, null (bigint, symbol) 

valor passado por referencia(mutaveis) = array, object, function
*/

let a = [1, 2, 3]
let b = [... a] // estamos copiando o valor a para dentro do b, o b esta sendo totalmente idependente
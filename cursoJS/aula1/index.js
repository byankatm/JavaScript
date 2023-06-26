/*
O que precisa ser mostrado:

'Nome' 'Sobrenome' tem 'idade' anos, pesa 'peso' kg tem 'altura' de altura e seu IMC é de 'IMC'
'Nome' nasceu em 'anoNas'
*/

const nome = 'Byanka Tomaz';
const sobrenome = 'Monteiro'
const idade = 19;
const peso = 84;
const alturaEmM = 1.70;

let imc;
let anoNas;

imc = peso / (alturaEmM^2);
anoNas = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmM, 'de altura e seu IMC é de', imc)
console.log(nome, 'nasceu em', anoNas)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNas}`)
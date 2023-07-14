const nome = prompt('Digite seu nome completo:');

let nomeSemEspaco = nome.replace(/ /g, '')

console.log(nomeSemEspaco)

const tamanhoNome = nomeSemEspaco.length
const segundaLetra = nome[1]
const indiceA = nome.indexOf('a')
const indiceLastI = nome.lastIndexOf('i')
const ultimasTresLetras = nome.slice(-3)
const palavrasDoNome = nome.split(' ')
const maiusculo = nome.toUpperCase()
const minusculo = nome.toLowerCase()

document.body.innerHTML += `Seu nome é: ${nome}<br />`;

document.body.innerHTML += `Seu nome tem ${tamanhoNome} letras <br />`;

document.body.innerHTML += `A segunda letra do seu nome é: ${segundaLetra}<br />`;

document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${indiceA} <br />`;

document.body.innerHTML += `Qual o último índice da letra I no seu nome? ${indiceLastI}<br />`;

document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasTresLetras}<br />`;

document.body.innerHTML += `As palavras do seu nome são: ${palavrasDoNome}<br />`;

document.body.innerHTML += `Seu nome com letras maiúsculas: ${maiusculo}<br />`;

document.body.innerHTML += `Seu nome com letras minúsculas: ${minusculo}<br />`;
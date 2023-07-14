const numero = Number(prompt("Digite um número: "))

const numeroTitulo = document.getElementById("numero-titulo")
const numeroTitu = document.getElementById("numero")
const raizQua = document.getElementById("raizQua")
const isInte = document.getElementById("isInteiro")
const isNaNN = document.getElementById("isNaN")
const arreBaixo = document.getElementById("baixo")
const arreCima = document.getElementById("cima")
const decimais = document.getElementById("duasDecimais")


numeroTitulo.innerHTML = numero
numeroTitu.innerHTML = numero
raizQua.innerHTML = Math.sqrt(numero)
isInte.innerHTML = Number.isInteger(numero)
isNaNN.innerHTML = Number.isNaN(numero)
arreBaixo.innerHTML = Math.floor(numero)
arreCima.innerHTML = Math.ceil(numero)
decimais.innerHTML = numero.toFixed(2)

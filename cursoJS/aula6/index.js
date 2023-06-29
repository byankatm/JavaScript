/*function saudacao(nome){
    return `Bom dia! ${nome}`;
}

const variavel = saudacao('Byanka');
console.log(variavel)

function soma(x, y){
    return x * y;
}

console.log(soma(2, 6))

function soma2(x = 1, y = 1){
    return x * y;
}

const resultado = soma2(3)

console.log(resultado)*/

//função sem simplificar e que precisa do ponto e virgula por estar sendo armazenado dentro da constante:
const raizPrin = function(n){
    return n ** 0.5;
};

//podemos fazer essa função quando há apenas um trecho de codigo
const raiz = n => n ** 0.5;


console.log(raiz(18))
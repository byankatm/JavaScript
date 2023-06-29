//array
//const array = [1, 2, 3];

//objeto
/*const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome)

function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };

    //também pode ser feito dessa forma caso os nomes dos parametros forem os mesmo do que a declaração do objeto
    //return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Byanka', 'Tomaz', 18)
const pessoa2 = criaPessoa('Samuel', 'Tomaz', 13)
const pessoa3 = criaPessoa('Adriana', 'Tomaz', 53)
const pessoa4 = criaPessoa('José', 'Monteiro', 60)

console.log(pessoa1.nome, pessoa2.idade)*/

const pessoa1 = {
    nome: 'Luis',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`Minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
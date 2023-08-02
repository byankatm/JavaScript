//factory function(Funçaõ fabrica)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,

        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,

        peso: p,

        //Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Byanka', 'Tomaz', 1.8, 80);
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Samuel Monteiro'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
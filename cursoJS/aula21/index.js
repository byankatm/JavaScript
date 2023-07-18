//factory function(Funçaõ fabrica)

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,

        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            console.log(valor)
        },

        fala(assunto) {
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
p1.nomeCompleto = 'Samuel Monteiro'
console.log(p1.imc)
console.log(p1.nomeCompleto)
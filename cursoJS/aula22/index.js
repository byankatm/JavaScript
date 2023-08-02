//Constructor function -> retorna objetos
// Na função contrutora -> Pessoa(new), inicar a função com letra maiuscula

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome} eu estou falando`);
    };
}

const p1 = new Pessoa("Jovem,", "Victor");

p1.metodo()
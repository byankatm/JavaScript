const frutas = ["Pera", "Maca", "Banana"];

for (const i in frutas) {
    console.log(i);
}

const pessoa = {
    nome: "Byanka",
    sobrenome: "Tomaz",
    idade: 18
};

for(chave in pessoa){
    console.log(chave, pessoa[chave]);
}
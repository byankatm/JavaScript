const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaSegundos(segundos){
    let data = new Date(segundos*1000);
    return data.toLocaleTimeString('Pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function inciarCrono(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos)
    }, 1000);
    relogio.style.color = 'black';
}

function pausarCrono(){
   clearInterval(timer);
   relogio.style.color = 'red';
}

function zerarCrono(){
    segundos = 0;
    clearInterval(timer);
    relogio.innerHTML = criaSegundos(segundos);
    relogio.style.color = 'black';
}

iniciar.addEventListener('click', inciarCrono);
pausar.addEventListener('click', pausarCrono);
zerar.addEventListener('click', zerarCrono);

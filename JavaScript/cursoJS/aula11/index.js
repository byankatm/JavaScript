const data = new Date();
let diaSemana = data.getDay();

function getDayWeenk(){

    let diaSemanaTexto;

    switch (diaSemana) {

        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
    
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
    
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
    
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
    
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
    
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }

}

const diaSemanaTexto = getDayWeenk(diaSemana);

console.log(diaSemanaTexto);
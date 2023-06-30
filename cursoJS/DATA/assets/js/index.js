function getDateP(){

    const data = new Date();
    let diaSemana = data.getDay();

    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`
    }
    
    function getDay(data){
        const day = zeroAEsquerda(data.getDate()); 
        return day;
    }

    function getMonth(data){
        const month = zeroAEsquerda(data.getMonth() + 1);
        return month;
    }

    function getYear(data){
        const year = zeroAEsquerda(data.getFullYear());
        return year;
    }

    function getHours(data){
        const hours = zeroAEsquerda(data.getHours);
    }

    function getDayWeenk(diaSemana){

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

}



getDateP()
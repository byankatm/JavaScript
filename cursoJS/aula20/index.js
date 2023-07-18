//função autoinvocada - IIFE -> Immediately invoked function expression

(function(idade, peso, altura){
    
    const sobrenome = 'Tomaz';

    function falaOi(nome){
        return nome + ' ' + sobrenome;
    };

    function falaNome(){
        console.log(falaOi('Byanka'))
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 80, 1.70);
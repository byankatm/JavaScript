function escopoImc() {

    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');

    function calculoImc (event){
        event.preventDefault();

        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        const IMC = getImc(peso, altura)
        const indiceImc = getIndiceImc(IMC)

        if (!peso){
            setResultado('Peso Inválido', false)
            return;
        }
        
        if (!altura){
            setResultado('Altura Inválida', false)
            return;
        }

        const msg = `Seu IMC é ${IMC} (${indiceImc})`;

        setResultado(msg, true);

    }

    function getIndiceImc(imc){

        const indice = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc >= 39.9) return indice[5];
        
        if (imc >= 34.9) return indice[4];
        
        if (imc >= 29.9) return indice[3]
        
        if (imc >= 24.9) return indice[2]
        
        if (imc >= 18.5) return indice[1]

        if (imc < 18.5) return indice[0]
        
    }

    function getImc(peso, altura){
        const IMC = peso / (altura**2);
        return IMC.toFixed(2)
    }

    function criaP(){
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid){
        resultado.innerHTML = '';

        const p = criaP();

        if(isValid){
            p.classList.add('normal');
        } else{
            p.classList.add('ruim');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    form.addEventListener('submit', calculoImc);

}

escopoImc()
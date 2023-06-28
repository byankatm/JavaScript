function escopoImc() {

    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');

    function calculoImc (event){
        event.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        const soma = peso.value / (altura.value**2);

        console.log(soma.toFixed(2))

    }

    form.addEventListener('submit', calculoImc);

}

escopoImc()
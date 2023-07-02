/*const resultado = document.querySelector('.container h1');
const data = new Date();

resultado.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })*/

function getDateP() {

    const data = new Date();
    const resultado = document.querySelector(".container h1")
    let diaSemana = data.getDay();

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }

    function getDay(data) {
        const day = zeroAEsquerda(data.getDate());
        return day;
    }

    function getMonthText(numMonth) {
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return months[numMonth];
    }

    function getMonth(data){
        const month = data.getMonth();
        return month;
    }

    function getYear(data) {
        const year = data.getFullYear();
        return year;
    }

    function getHours(data) {
        const hours = zeroAEsquerda(data.getHours());
        return hours;
    }

    function getMin(data) {
        const min = zeroAEsquerda(data.getMinutes())
        return min;
    }

    function getDayWeenk(diaSemana) {
        const semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
        return semana[diaSemana];
    }

    function exibicao(data) {
        const numMonth = getMonth(data);
        const exibindo = `${getDayWeenk(diaSemana)}, ${getDay(data)} de ${getMonthText(numMonth)} de ${getYear(data)}<br>${getHours(data)}:${getMin(data)}`;
        return exibindo;
    }

    const exibindo = exibicao(data);
    resultado.innerHTML = exibicao(data)
    console.log(exibindo)
}

getDateP()
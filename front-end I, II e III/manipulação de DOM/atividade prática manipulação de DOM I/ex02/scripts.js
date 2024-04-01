const contador = document.querySelector('#contador');
let contadorValue = 0;

function incrementarContador() {
    atualizarContador(++contadorValue);
}

function zerarContador() {
    contadorValue = 0;
    atualizarContador();
}

function atualizarContador(valor=null) {
    if (valor) {
        contador.innerText = `O contador está com ${valor} cliques.`;
        return;
    }
    contador.innerText = '';
}
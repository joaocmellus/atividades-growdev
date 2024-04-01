function alterarTexto() {
    const text = prompt('Insira seu nome:');

    if (text) {
        const mensagem = `E aí ${text}! Você está deixando o seu site dinâmico.`

        document.querySelector('#dinamic-text').innerText = mensagem;
    }
}
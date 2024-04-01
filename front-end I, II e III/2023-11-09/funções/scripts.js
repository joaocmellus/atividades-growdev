// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

function calcMedia(notas, tipo_media = 'A') {
    const peso = [5, 3, 2];
    if (tipo_media === 'A') {
        return notas.reduce((count, num) => count + num) / 3;
    }
    if (tipo_media === 'P') {
        const mediaPonderada = notas.reduce((count, num, i) => count + (num * peso[i]), 0);
        const pesoTotal = peso.reduce((count, p) => count + p);        
        return mediaPonderada / pesoTotal;
    }

    return null; // Retorna null em caso de tipo de média inválido
}
console.log(calcMedia([2, 2, 1], 'P'));

// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

function numeroPar(numero) {
    return !(numero % 2);
}
console.log(numeroPar(64))

// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(primo(17));

// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.
// Ex:
// Entrada: 3672
// Saída: 1:1:12

function formatarTempo(segundos) {
    const horas = parseInt(segundos / 60 ** 2);
    segundos %= 60 ** 2;
    
    const minutos = parseInt(segundos / 60);
    segundos %= 60;

    return [horas, minutos, segundos].join(':')
}
console.log(formatarTempo(3672));

// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

function numeroPerfeito(numero) {
    if (numero <= 0) {
        return false;
    }
    let soma = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }
    return soma === numero;
}

console.log(numeroPerfeito(28));

// 6. Crie uma função chamada acessoAoSite() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// um alerta informando “Bem vindo ao site”.

function acessoAoSite() {
    alert('Bem vindo ao site');
}
// acessoAoSite();


// 7. Crie uma função chamada mostrarMensagem() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// uma mensagem no console.log() informando “Acesso à aplicação
// NomeAplicação” e um alerta informando “Bem vindo à aplicação
// NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
// uma variável para mostrar nas mensagens.

const nomeAplicacao = "AppTeste";
function mostrarMensagem() {
    console.log(`Acesso à aplicação ${nomeAplicacao}`);
    alert(`Bem-vindo à aplicação ${nomeAplicacao}`);
}
// mostrarMensagem();


// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

function mostrarDobro(num) {
    const dobro = num * 2;
    alert(`O dobro do número ${num} é ${dobro}.`);
}
// mostrarDobro(5);


// 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// nome), que recebe 4 parâmetros sendo três inteiros e um texto
// (String). Esta função será chamada ao abrir a página e mostrará um
// alerta com a média. Exemplo: “João, sua média é 70.” A função
// também deve mostrar no console.log() as notas recebidas. Exemplo
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

function calcularMedia(nota1, nota2, nota3, nome) {
    const media = (nota1 + nota2 + nota3) / 3;

    console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}`);
    
    alert(`${nome}, sua média é ${media}.`);
}

calcularMedia(60, 70, 80, "João");

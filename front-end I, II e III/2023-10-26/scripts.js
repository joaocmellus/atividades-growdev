// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let maiorAltura   = 0;
let menorAltura   = 0;
let continuar;
let altura;

// Automatizar teste
const array = [1.61, 1.65, 1.74, 1.83, 1.68, 1.79, 1.92, 1.64, 1.88, 1.95, 1.86, 1.77, 1.81, 1.73, 1.80];

for (let i = 1; i <= 15; i++) {
    do {
        // altura = parseFloat(prompt(`Insira a altura da ${i}ª pessoa:`));
        altura = array.pop(); // automatizar teste

        if (altura > 0 && !Number.isNaN(altura)) {
            if (menorAltura == 0) {
                menorAltura = altura;
            }
            if (altura > maiorAltura) {
                maiorAltura = altura;
            } else {
                if (altura < menorAltura) {
                    menorAltura = altura;
                }
            }
            continuar = false;
        } else {
            continuar = true
            alert('Valor inválido. ', altura);
        }

    } while (continuar);
}

document.write(
    `Ex. 1:<br>
    a. A menor altura do grupo é: ${menorAltura} <br>
    b. A maior altura do grupo é: ${maiorAltura} <br><br>
    `
);


// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let alturaPedro = 150;
let alturaLucas = 110;
const crescimentoPedro = 2;
const crescimentoLucas = 3;

let qntAnosLucasSerMaior = 0;
let anosMesmoTamanho = 0;

while ( !(alturaLucas > alturaPedro) ) {
    alturaLucas += crescimentoLucas;
    alturaPedro += crescimentoPedro;
    
    qntAnosLucasSerMaior++;
    if (alturaLucas == alturaPedro) {
        anosMesmoTamanho = qntAnosLucasSerMaior;
    }
}   
document.write(`
Ex. 2:<br>
a. Para que Lucas e Pedro tenham o mesmo tamanho, serão necessários ${anosMesmoTamanho} anos. <br>
b. Para que Lucas seja maior que Pedro, serão necessários ${qntAnosLucasSerMaior} anos. <br><br>
`);


// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6

// Automatizar testes
const multiplicando = 5;
const iteracoes = 10;
// const multiplicando = parseInt(prompt('Insira o multiplicando para realizar a tabuada:'));
// const iteracoes = parseInt(prompt('Insira o número de multiplicações que a tabuada deve conter:')); 

let resultadoTabuada = '';
for (let i = 1; i <= iteracoes; i++) {
    resultadoTabuada += `${i} &#215; ${multiplicando} = ${i * multiplicando}<br>`;
}

document.write(`
Ex. 3:<br>
Resultado da tabuado do ${multiplicando}: <br>
${resultadoTabuada}<br>`);


// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos de 5.

let multiplo3 = '';
let multiplo5 = '';

for (let i = 1; i <= 250; i++) {
    if (i % 3 == 0) {
        multiplo3 += i + ', ';
    }
    if (i % 5 == 0) {
        multiplo5 += i + ', ';
    }
}

document.write(`
    Ex. 4: <br>
    Entre 1 e 250: <br>
    São múltiplos de 3 os números:<br>`,
    multiplo3.slice(0, -2),
    `<br> E, são múltiplos de 5 os números:<br>`,
    multiplo5.slice(0, -2),
    '<br><br>'
);
    
    
// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

let contagem = '';
let valorInserido;
let valido;

do {
    // automatizar teste
    // valorInserido = Number(prompt('Insira um número inteiro positivo:')); 
    valorInserido = 9; 

    valido = valorInserido > 0 && Number.isInteger(valorInserido);
    if (!valido) {
        alert('Valor inválido!');
    }
} while (!valido);

for (let i = 0; i <= valorInserido; i++) {
    contagem += i + ', '    
}

document.write(
    `Ex. 5:<br>
    Contagem: ${contagem} FIM!<br><br>
    `
)

// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:

contagemPrimos = '';

// Loop dos números que serão testados
for (let i = 30; i >= 2; i--) {
    let numeroPrimo = true;

    // Loop de teste validando a divisão através do uso do módulo
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            numeroPrimo = false;
            break;
        }
    }

    // Verifica e aplica lógica caso o número seja primo
    if (numeroPrimo) {
        contagemPrimos += `[${i}] `;
    } else {
        contagemPrimos += `${i} `;
    }
}

document.write(
    `Ex. 6:<br>
    Números primos entre 30 e 1: ${contagemPrimos}<br><br>`
);

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let total = 0;
let positivos = 0;
let negativos = 0;
const quantidade = 10;

const arrayTeste = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];

for (let i = 0; i < quantidade; i++) {
    let numeroLido;
    let validar;
    do {
        // automatizar teste
        // numeroLido = Number(prompt(`${i+1}. Insira um número:`));
        numeroLido = arrayTeste.pop(); // automatizar teste
        
        validar = !Number.isNaN(numeroLido);
        if (!validar) {
            alert('Valor inválido!');
        }
    } while (!validar);

    numeroLido >= 0 ? positivos++ : negativos++
    total += numeroLido;
}

const media = total / quantidade;
const porcentPositivos = ( positivos / quantidade ) * 100;
const porcentNegativos = ( negativos / quantidade ) * 100;

document.write(
    `Ex. 7:<br>
    A média aritmética dos valores passados: ${media}<br>
    A quantidade de valores negativos: ${negativos}<br>
    A porcentagem de valores negativos: ${porcentNegativos}%<br>
    A quantidade de valores positivos: ${positivos}<br>
    A porcentagem de valores positivos: ${porcentPositivos}%<br>
    `
);
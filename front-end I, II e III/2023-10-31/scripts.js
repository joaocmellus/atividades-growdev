// 1. Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

const idadeMotorista = 18; //Number(prompt("Insira a idade do motorista:"));

if (idadeMotorista >= 18) {
    console.log('Pode dirigir');
} else {
    console.log('Não pode dirigir');
}

// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

const IdadeMotorista = true; //Number(prompt("Insira a idade do motorista:"));
const temHabilitacao = 18;   //confirm('O motorista possui habilitação?');

if (IdadeMotorista >= 18 && temHabilitacao) {
    console.log('Pode dirigir');
} else {
    console.log('Não pode dirigir');
}

// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

const diaSemana = 7; //Number(prompt("Insira o número referente a um dia da semana de 1 a 7:"));
let valorDia;

if ( diaSemana == 1 ) {
    valorDia = 'Domingo';
} else if ( diaSemana == 2 ) {
    valorDia = 'Segunda';
} else if ( diaSemana == 3 ) {
    valorDia = 'Terça';
} else if ( diaSemana == 4 ) {
    valorDia = 'Quarta';
} else if ( diaSemana == 5 ) {
    valorDia = 'Quinta';
} else if ( diaSemana == 6 ) {
    valorDia = 'Sexta';
} else if ( diaSemana == 7 ) {
    valorDia = 'Sábado';
} else {
    valorDia = null;
}

if (valorDia) {
    console.log(`O número ${diaSemana} corresponde a: ${valorDia}.`)
} else {
    console.log('Dia não reconhecido.')
}

// 4. Reescreva o exercício 3, utilizando apenas o SWITCH.

const DiaSemana = 2; //Number(prompt("Insira o número referente a um dia da semana de 1 a 7:"));
let ValorDia;

switch (DiaSemana) {
    case 1:
        ValorDia = 'Domingo';
        break;

    case 2:
        ValorDia = 'Segunda';
        break;

    case 3:
        ValorDia = 'Terça';
        break;

    case 4:
        ValorDia = 'Quarta';
        break;

    case 5:
        ValorDia = 'Quinta';
        break;

    case 6:
        ValorDia = 'Sexta';
        break;

    case 7:
        ValorDia = 'Sábado';
        break;

    default:
        ValorDia = null;
        break;
}

if (ValorDia) {
    console.log(`O número ${DiaSemana} corresponde a: ${ValorDia}.`)
} else {
    console.log('Dia não reconhecido.')
}

// 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
// os números pares.

for (let i = 0; i < 10; i++) {
    i%2 == 0 ? console.log(i) : null
}

// 6. Insira no html 30 ( trinta ) números ímpares.
let contagem = 0;
let numeroAtual = 1;

while (contagem < 30) {
    document.write(numeroAtual, ' ');
    numeroAtual += 2;
    contagem++
}

// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.
let valorAtual = 0;
let contador = 10;
const fim = 100;

do {
    valorAtual += contador;
    contador++;
} while (contador < fim);

document.write('<br><br>A soma dos números entre 10 e 100 é: ', valorAtual);

// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

const salario = 5500;

if (salario < 1903.98) {
    document.write('<br><br> Isento de IR');
} else {
    document.write('<br><br> Tributado no IR');
}

// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

const varPrimo = 11;
let primo = true;

for (let i = varPrimo-1; i > 1; i--) {
    if (varPrimo % i == 0) {
        primo = false;
    }
}

if (primo) {
    document.write(`<br><br> O número ${varPrimo} é primo`);
} else {
    document.write(`<br><br> O número ${varPrimo} NÃO é primo`);
}

// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

const sexo = 1; //Number(prompt("Insira o valor referente ao seu sexo: \n1 - Feminino. \n2 - Masculino."));
const altura = 1.70; // parseFloat(prompt("Insira a sua altura: "));

switch (sexo) {
    case 1:
        document.write( `<br><br>Para uma mulher de ${altura}m o peso ideal é de: kg${((62.1 * altura) - 44.7).toFixed(2)}`);
        break;

    case 2:
        document.write( `<br><br>Para um homem de ${altura}m o peso ideal é de: kg${((72.7 * altura) - 58).toFixed(2)}`);
        break;

    default:
        document.write('<br><br>Valor inválido inserido.')
        break;
}

// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

const horarioAula = 'M';//prompt('Insira o horário que você estuda:\nM - Matutino\nV - Vespertino\nN - Noturno').toUpperCase();
let mensagem;

switch (horarioAula) {
    case 'M':
        mensagem = 'Bom dia!';
        break;
    case 'V':
        mensagem = 'Boa tarde!';
        break;
    case 'N':
        mensagem = 'Boa noite!';
        break;
        
    default:
        mensagem = null;
        break;
}

if (mensagem) {
    document.write('<br></br>',mensagem)
} else {
    document.write('<br><br>Valor inválido! <br>')
}

// 12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
// programa que armazene a idade de uma pessoa e diga se ela pode
// doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
// (&&).

const idadeDoador = 18; //Number(prompt("Insira a idade do possível doador:"));

if (idadeDoador >= 18 && idadeDoador <= 67) {
    document.write(`<br><br>Com ${idadeDoador} anos você pode doar sangue.`)
} else {
    document.write(`<br><br>Com ${idadeDoador} anos você NÃO pode doar sangue.`)
}

// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

const numeroInserido = 24; //Number(prompt("Insira um número positivo maior que 1:"));

if (numeroInserido > 1) {
    for (let i = 0; i <= numeroInserido; i++) {
        if (i%2) {
            console.log(i)
        }
    }
} else {
    console.log('valor inválido');
}

// 14. Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let numero = 24; //Number(prompt("Insira um número positivo maior que 1:"));

if (numero > 1) {
    while (numero < 500) {
        if ((numero * 3) > 500) {
            break
        }
        numero *= 3;
    }
    console.log(`O número final é: ${numero}`);
}

// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let ladoA = 5;
let ladoB = 5;
let ladoC = 5;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero");

    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles");

    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo");
}

// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

const anoAtual = new Date().getFullYear();
const anoNascimento = 2004;
const idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log('A pessoa pode votar este ano.');
} else {
    console.log('A pessoa NÃO pode votar este ano.');
}

// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

const totalEleitores = 1000;
const votosValidos = 800;
const votosBrancos = 100;
const votosNulos = 100;

if ( (votosBrancos + votosNulos + votosValidos) == totalEleitores) {

    const porcentBrancos = (votosBrancos / totalEleitores) * 100;
    const porcentNulos = (votosNulos / totalEleitores) * 100;
    const porcentValidos = (votosValidos / totalEleitores) * 100;

    console.log("Percentual de votos válidos: " + porcentValidos.toFixed(2) + "%");
    console.log("Percentual de votos brancos: " + porcentBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + porcentNulos.toFixed(2) + "%");

} else {
    console.log("Quantidade incorreta de votos contabilizados.");
}

// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

const precoTabela = 1000;
const numeroParcelas = 12;

let valorParcela;
let precoTotal;

if (numeroParcelas === 1) {
    precoTotal = precoTabela * (1 - 0.025);

} else if (numeroParcelas <= 5) {
    precoTotal = precoTabela;

} else if (numeroParcelas <= 10) {
    precoTotal = precoTabela * (1 + 0.06);

} else if (numeroParcelas <= 15) {
    precoTotal = precoTabela * (1 + 0.13);

} else {
    console.log("Número de parcelas inválido.");
}

if (precoTotal) {
    console.log(`Valor da parcela: R$${ (precoTotal / numeroParcelas).toFixed(2) }`);
    console.log(`Preço total da compra: R$${precoTotal.toFixed(2)}`);
}
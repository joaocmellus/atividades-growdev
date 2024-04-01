// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
// calcular e escrever o valor correspondente em graus Fahrenheit.

const celsius = Number(prompt('Insira uma temperatura em graus Celsius:'));
const fahrenheit = ((celsius / 5) * 9) + 32;

document.write(`A temperatura  ${celsius}° é equivalente a ${fahrenheit}°F.<br>`);

// 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

const dia = Number(prompt('Insira um número de 1 a 7:'));
let nome_dia;

switch (dia) {

    case 1:
        nome_dia = 'Domingo';
        break;
    case 2:
        nome_dia = 'Segunda-feira';
        break;
    case 3:
        nome_dia = 'Terça-feira';
        break;
    case 4:
        nome_dia = 'Quarta-feira';
        break;
    case 5:
        nome_dia = 'Quinta-feira';
        break;
    case 6:
        nome_dia = 'Sexta-feira';
        break;
    case 7:
        nome_dia = 'Sábado';
        break;
}

if (nome_dia) {
    document.write(`O número ${dia} equivale a ${nome_dia}!<br>`)
} else {
    document.write('Valor inválido.<br>');
}

// 3. Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

const numero = Number(prompt('Insira um número:'));
let tipo_numero;

if (numero == 0 ) {
    tipo_numero = 'não é nem positivo nem negativo, é zero'
} else if (numero > 0 ) {
    tipo_numero = 'positivo'
} else {
    tipo_numero = 'negativo'
}
    document.write(`O número ${numero} é ${tipo_numero}!<br>`)


// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custoFabrica = Number(prompt('Insira o custo de fábrica do veículo:'));

const porcentDistribuidor = 0.28 * custoFabrica;
const impostos = 0.45 * custoFabrica;

const custoCarro = custoFabrica + porcentDistribuidor + impostos;

document.write(`O custo final do consumidor é: R$:${custoCarro}<br>`);

// 5. Desenvolva um algoritmo que faça o cálculo do índice de massa
// corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
// que digite sua altura, em seguida solicitar que digite seu peso e que
// lhe exiba o status. O status vai variar da seguinte forma:
// a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
// “Você está abaixo da faixa de peso ideal”;
// b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
// “Você está acima da faixa de peso ideal”;
// c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
// 24,99, o status a ser mostrado será “Você está dentro da faixa
// de peso ideal”.

const altura = Number(prompt('Insira sua altura (metros): '));
const peso = Number(prompt('Insira seu peso (kg): '));
const IMC = peso / (altura ** 2);
let status;

if (IMC < 18.5) {
    status = 'Você está abaixo da faixa de peso ideal';
} else if (IMC > 24.99) {
    status = 'Você está acima da faixa de peso ideal';
} else {
    status = 'Você está dentro da faixa de peso ideal';
}

document.write(`${status}<br>`);

// 6. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

const valorA = Number(prompt('Insira o primeiro número:'))
const valorB = Number(prompt('Insira o segundo número:'))

const operacao = prompt('insira a operação: (+, -, *, /) ');
let resultado;

switch (operacao) {
    case '+':
        resultado = valorA + valorB;
        break;
    case '-':
        resultado = valorA - valorB;
        break;
    case '*':
        resultado = valorA * valorB;
        break;
    case '/':
        resultado = valorA / valorB;
        break;
}

if (operacao) {
    document.write(`O resultado do cálculo é ${resultado}!<br>`)
} else {
    document.write('Valor inválido.<br>');
}

// 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let saldo = 1000;

const saque = Number(prompt('Insira um valor de retirada, que seja múltiplo de 5:'));

if ((saque > 0) && (saque % 5 == 0)) {
    if (saque + 4.5 <= saldo) {
        saldo = saldo - (saque + 4.5);
        document.write(`O saldo restante da conta é: R$${saldo}<br>`);
    } else {
        document.write('Você não tem dinheiro suficiente para realizar o saque...<br>')
    }
} else {
    document.write('Valor inválido.<br>')
}

// 8. Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

const Idade = Number(prompt('Insira sua idade:'));
const Peso = Number(prompt('Insira seu peso (kg):'));
let categoria;

if (Idade <= 12) {
    categoria = 'Infantil';
} else if (Idade <= 16) {
    if (Peso <= 40) {
        categoria = 'Juvenil leve';
    } else {
        categoria = 'Juvenil pesado';
    }
} else if (Idade <= 24) {
    if (Peso <= 45) {
        categoria = 'Sênior leve';
    } else if (Peso <= 60) {
        categoria = 'Sênior médio';
    } else {
        categoria = 'Sênior pesado';
    }
} else {
    categoria = 'Veterano';
}
document.write(`Sua categoria é ${categoria}<br>`);

// 9. Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

const velocidade = Number(prompt('Insira a velocidade do carro: '));

if (velocidade > 80) {
    const excedente = velocidade - 80;
    const multa = excedente * 5;
    
    document.write(`Você recebeu uma multa por excesso de velocidade! O valor da multa é igual a: R$${multa}<br>`);
} else if (velocidade < 0) {
    document.write(`Valor inválido.<br>`);
}
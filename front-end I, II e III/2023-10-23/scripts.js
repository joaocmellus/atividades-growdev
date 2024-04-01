//      EX01
// const nota_1 = Number(prompt('Insira sua 1ª nota:'));
// const nota_2 = Number(prompt('Insira sua 2ª nota:'));
// const nota_3 = Number(prompt('Insira sua 3ª nota:'));

// const media = (nota_1 + nota_2 + nota_3) / 3;

// if ( media >= 9 && media <= 10 ) {
//     document.write('Aprovado com nota excelente.');
// } else if (media >= 7) {
//     document.write('Aprovado com nota boa.');
// } else if (media >= 0 && media < 7) {
//     const recuperao = Number(prompt('Nota inferior a 7.\nInsira a nota de recuperação:'));

//     if (recuperao > 6) {
//         document.write('Aprovado na recuperação.');
//     } else if (recuperao >= 0 && recuperao <= 6) {
//         document.write('Reprovado, estude e pratique mais.');
//     } else {
//         document.write('Nota inválida detectada!');
//     }
// } else {
//     document.write('Nota inválida detectada!');
// }


//      EX02
const numero = Number(prompt('Insira o número do mês que deseja:'));

switch (numero) {
    case 1:
        mes = 'Janeiro';
        break;
    case 2:
        mes = 'Fevereiro';
        break;
    case 3:
        mes = 'Março';
        break;
    case 4:
        mes = 'Abril';
        break;
    case 5:
        mes = 'Maio';
        break;
    case 6:
        mes = 'Junho';
        break;
    case 7:
        mes = 'Julho';
        break;
    case 8:
        mes = 'Agosto';
        break;
    case 9:
        mes = 'Setembro';
        break;
    case 10:
        mes = 'Outubro';
        break;
    case 11:
        mes = 'Novembro';
        break;
    case 12:
        mes = 'Dezembro';
        break;
}

if (mes) {
    document.write('O mês escolhido foi: ', mes);
} else {
    document.write('Mês inválido!');
}
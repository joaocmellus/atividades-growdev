// // 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// // O programa vai parar quando for digitada a idade 999. No final,
// // mostre quantos alunos existem na turma e qual é a média de idade do grupo.

// const idadeAlunos = [];
// let i = 1;

// while (true) {
//         const idade = Number(prompt(`Digite a idade do ${i}º aluno: (digite 999 para finalizar)`));
        
//         if (isNaN(idade) || idade <= 0) {
//             alert('Valor inválido!');
//             continue;
//         }

//         if (idade == 999) {
//                 break;
//             }
//             idadeAlunos.push(idade);
//             i++;
// }
    
// let soma = 0;
// for (const idade of idadeAlunos) {
//     soma += idade;
// }

// const media = soma / idadeAlunos.length;

// alert(`A turma possui ${idadeAlunos.length} alunos e a média de idade é de ${media}`);

// // 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// // funcionários. No final, mostre o total de salários pagos aos homens e
// // o total pago às mulheres. O programa vai perguntar ao usuário se
// // ele quer continuar ou não sempre que ler os dados de um
// // funcionário.
        
// let totalSalarioHomens = 0;
// let totalSalarioMulheres = 0;
        
// while (true) {
//     const salario = Number(prompt("Digite o salário do funcionário:"));
    
//     if (isNaN(salario) || salario <= 0) {
//         alert('Valor inválido!');
//         continue;
//     }
//     const sexo = prompt("Digite o sexo do funcionário (M para masculino ou F para feminino):").toUpperCase();

//     if (sexo === "M") {
//         totalSalarioHomens += salario;

//     } else if (sexo === "F") {
//         totalSalarioMulheres += salario;

//     } else {
//         alert('Valor inválido! Use M para masculino e F para feminino.');
//         continue;
//     }

//     if ( !confirm("Deseja continuar?") ) {
//             break;
//         }
//     }
//     alert(`Total de salários pagos aos homens: R$${totalSalarioHomens.toFixed(2)} \nTotal de salários pagos às mulheres: R$${totalSalarioMulheres.toFixed(2)}`);
    
//     // 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
//     // o incremento, mostrando em seguida todos os valores no intervalo:
//     // Ex:
// // Digite o primeiro Valor: 3
// // Digite o último Valor: 10
// // Digite o incremento: 2
// // Contagem: 3 5 7 9 Acabou!

// const valorInicial = parseInt(prompt("Digite o primeiro Valor:"));
// const valorFinal   = parseInt(prompt("Digite o último Valor:"));
// const incremento   = parseInt(prompt("Digite o incremento:"));
// let contagem = 'Contagem: ';

// for (let i = valorInicial; i <= valorFinal; i += incremento) {
//     contagem += i + ' ';
// }

// alert(contagem + 'Acabou!');

// // 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// // descontos para todos, mas especialmente para mulheres. Faça um
// // programa que leia nome, sexo e o valor das compras do cliente e
// // calcule o preço com desconto. Sabendo que:
// // a. Homens ganham 5% de desconto
// // b. Mulheres ganham 13% de desconto

// const nome = prompt("Digite o nome do cliente:");
// let sexo;
// let valorCompras;

// do {
//     sexo = prompt("Digite o sexo do cliente (M para masculino ou F para feminino):").toUpperCase();
    
//     if (sexo == 'M' || sexo == 'F') {
//         break;
//     } else {
//         alert('Valor inválido! Use M para masculino e F para feminino.');
//     }
// } while (true);

// do {
//     valorCompras = parseFloat(prompt("Digite o valor das compras:"));

//     if (isNaN(valorCompras) || valorCompras <= 0) {
//         alert('Valor inválido!');
//     } else {
//         break
//     }
// } while (true);

// const taxaDesconto = sexo == 'M' ? 0.05 : 0.13;

// const precoFinal = valorCompras * (1 - taxaDesconto);

// alert(`Resultado do desconto:
//     Cliente: ${nome}
//     Valor das compras: R$${valorCompras.toFixed(2)}
//     Sexo: ${sexo == 'M' ? 'Masculino' : 'Feminino'}
//     Preço com desconto: R$${precoFinal.toFixed(2)}
// `)

// // 5. Faça um algoritmo que pergunte a distância que um passageiro
// // deseja percorrer em Km. Calcule o preço da passagem, cobrando
// // R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// // longas.

// const distancia = parseFloat(prompt("Digite a distância que deseja percorrer em Km:"));

// const precoCurtaDistancia = 0.50;
// const precoLongaDistancia = 0.45;

// const precoPassagem = distancia <= 200 ? distancia * precoCurtaDistancia : precoPassagem = distancia * precoLongaDistancia;

// alert(`O preço da passagem para ${distancia} Km é R$${precoPassagem.toFixed(2)}`);

// // 6. Faça um programa que leia a largura e o comprimento de um
// // terreno retangular, calculando e mostrando a sua área em m2. O
// // programa também deve mostrar a classificação desse terreno, de
// // acordo com a lista abaixo:
// //    Abaixo de 100m2 = TERRENO POPULAR
// //    Entre 100m2 e 500m2 = TERRENO MASTER
// //    Acima de 500m2 = TERRENO VIP

// const largura = parseFloat(prompt("Insira a largura do terreno (em metros):"));
// const comprimento = parseFloat(prompt("Insira o comprimento do terreno (em metros):"));

// const area = largura * comprimento;

// let classificacao;
// if (area > 0 && area < 100) {
//   classificacao = "TERRENO POPULAR";
// } else if (area >= 100 && area <= 500) {
//   classificacao = "TERRENO MASTER";
// } else if (area > 500) {
//   classificacao = "TERRENO VIP";
// } else {
//     classificacao == null;
// }

// if (classificacao) {
//     alert(`A área do terreno é de ${area} m². \nClassificação do terreno: ${classificacao}`)
// } else {
//     alert('Valor inválido inserido.')
// }
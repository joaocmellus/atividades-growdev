// 1. Criar um array e percorrê-lo utilizando o loop for
// a. Crie um array com o nome "nomes" e adicione 4 nomes de
// pessoas que você conhece
// b. Utilize o loop for para percorrer o array e exibir os nomes na
// tela

const nomes = ['João', 'Mirna', 'Douglas', 'Carla'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// 2. Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

const numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (const numero of numeros) {
    soma += numero;    
}
console.log(soma);

// 3. Utilizar os métodos push, pop, unshift e shift para manipular um array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela

const frutas = ['banana', 'maçã', 'uva'];

frutas.push('pêssego');
frutas.pop();
frutas.unshift('mamão');
frutas.shift();

console.log(frutas);
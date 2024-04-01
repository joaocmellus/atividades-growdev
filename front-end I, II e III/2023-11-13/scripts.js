const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];

// 1. Imprima no console a quantidade de pessoas Total.
console.group('Dados gerais:')
console.log('A quantidade total de pessoas é de:', data.length);

// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
const filteredByFemale = data.filter(person => person.sexo === 'F');
console.log('A quantidade de pessoas do sexo feminino é:', filteredByFemale.length);

// 3. Imprima no console a soma do salário de todas as pessoas.
const salarySum = data.reduce( (total, person) => total + person.salario, 0);
console.log('A soma de todos os salário é:', salarySum.toFixed(2));

// 4. Imprima no console a média do salário de todas as pessoas.
const salaryMed = salarySum / data.length;
console.log('A média salarial total é de:', salaryMed.toFixed(2));
console.groupEnd()

// 5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
console.group('Dados masculinos')
const filteredByMale = data.filter(person => person.sexo === 'M');
const maleSalarySum = filteredByMale.reduce( (total, person) => total + person.salario, 0);
console.log('A soma do salário de todos os homens é:', maleSalarySum.toFixed(2));

// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
const maleSalaryMed = filteredByMale.reduce( (total, person) => total + person.salario, 0) / filteredByMale.length;
console.log('A média salarial de todos os homens é de:', maleSalaryMed.toFixed(2));
console.groupEnd()

// 7. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
console.group('Informações')
const result = data.some(person => person.salario > 7000);
console.log('Existe algum salário acima de R$7.000?', result);

// 8. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.
const find = 'Eva Trindade';
const index = data.findIndex(person => person.nome === find);
console.log('O índice para o nome "Eva Trindade" é:', index);

// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".
const filteredByNameSilva = data.filter(person => person.nome.includes('Silva')); 
console.log('As pessoas que têm o sobrenome "Silva" são:', filteredByNameSilva.reduce((text, person, index) => text + `\n  ${index+1} - ${person.nome}`, ''));

// 10. Imprima os nomes utilizando o MAP
const nameList = data.map(person => person.nome);
console.log('Pessoas cadastradas:', nameList.reduce((text, actual, index) => text + `\n  ${index + 1} - ${actual}`, ''));
console.groupEnd();
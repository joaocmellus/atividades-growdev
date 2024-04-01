// 1. Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

console.log(salarios.findIndex(salario => salario > 7500));
console.log(salarios.filter(salario => salario > 8000));

// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];
// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:
// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo"

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
rainbow.splice(rainbow.indexOf('Preto'), 1, "Amarelo", "Verde");
rainbow.splice(rainbow.length, 0, "Roxo");
console.log(rainbow);

// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

const usuarios = [
    {
        "nome": "Amanda",
        "idade": 30,
        "trabalhando": true,
        "salario": 7000
    },
    {
        "nome": "Felipe",
        "idade": 10,
        "trabalhando": false,
        "salario": null
    },
    {
        "nome": "Paulo",
        "idade": 25,
        "trabalhando": true,
        "salario": 3000
    },
    {
        "nome": "Rafa",
        "idade": 16,
        "trabalhando": true,
        "salario": 1300
    },
    {
        "nome": "Alice",
        "idade": 20,
        "trabalhando": true,
        "salario": 2000
    }
]//[];

function mostrarUsuarios(titulo, usuarios) {
    let mensagem = titulo;
    for (const usuario of usuarios) {
        mensagem += `Nome: ${usuario.nome}, Idade: ${usuario.idade}\n`;
    }
    console.log(mensagem);
}

do {
    const usuario = {};
    usuario.nome = prompt('Insira o nome do usuário:');

    while (true) {
        const idade = Number(prompt('Insira a idade do usuário:'));

        if (idade > 0) {
            usuario.idade = idade;
            break;
        }

        alert('Valor incorreto! Insira um valor numérico e maior que zero.');
    }

    usuario.trabalhando = confirm('O usuário está empregado?');
    usuario.salario = null;

    if (usuario.trabalhando) {
        while (true) {
            const salario = Number(prompt('Insira o salário do usuário:'));

            if (!isNaN(salario) && salario > 0) {
                usuario.salario = salario;
                break;
            }

            alert('Valor incorreto! Insira um valor numérico e maior que zero.');
        }
    }

    usuarios.push(usuario);

} while (confirm('Deseja cadastrar mais um usuário?'));

const filtros = {
    desempregados: {
        titulo: 'Pessoas desempregadas:\n\n',
        usuarios: usuarios.filter(usuario => !usuario.trabalhando),
    },
    salarioMenor: {
        titulo: 'Pessoas empregadas com salários menores que 2500:\n\n',
        usuarios: usuarios.filter(usuario => usuario.trabalhando && usuario.salario < 2500),
    },
    salarioMaior: {
        titulo: 'Pessoas empregadas com salários maiores que 2500:\n\n',
        usuarios: usuarios.filter(usuario => usuario.trabalhando && usuario.salario >= 2500),
    },
};

for (const filtro in filtros) {
    mostrarUsuarios(filtros[filtro].titulo, filtros[filtro].usuarios);
}

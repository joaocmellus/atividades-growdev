// Lidar com a base de dados
const restaurante = {
    id: 0,
    pratos: [],
    chaves: [
        {
            nome: 'Nome',
            chave: 'nome',
            tipo: 'string',
            valoresEstritos: null
        },
        {
            nome: 'Descrição',
            chave: 'descricao',
            tipo: 'string',
            valoresEstritos: null
        },
        {
            nome: 'Categoria',
            chave: 'categoria',
            tipo: 'string',
            valoresEstritos: ['Entrada', 'Prato Principal', 'Sobremesa']
        },
        {
            nome: 'Preço',
            chave: 'preco',
            tipo: 'number',
            valoresEstritos: null
        },
        {
            nome: 'Disponibilidade no menu',
            chave: 'disponivel',
            tipo: 'boolean',
            valoresEstritos: null
        }
    ], 
    filtros: [
        {
            nome: 'Nome',
            mensagem: 'Insira o nome ou sequência de letras que deseja buscar:',
            tipo: 'string',
            funcao: filtrarNome,
        },
        {
            nome: 'Preço (maior que)',
            mensagem: 'Insira um valor base para buscar pratos com valores maiores:',
            tipo: 'string',
            funcao: filtrarPrecoMaior,
        },
        {
            nome: 'Preço (menor que)',
            mensagem: 'Insira um valor base para buscar pratos com valores menores:',
            tipo: 'number',
            funcao: filtrarPrecoMenor,
        },
        {
            nome: 'Categoria',
            mensagem: 'Insira a categoria que deseja:\n\n' + '0 - Entrada\n1 - Prato Principal\n2 - Sobremesa',
            tipo: 'number',
            funcao: filtrarCategoria,
        },
    ],
};

function pegarID() {
    return ++restaurante.id;
}

function pegarFiltros() {
    return restaurante.filtros;
}

function pegarCategorias() {
    return restaurante.chaves.find(obj => obj.chave === 'categoria').valoresEstritos;
}

function pegarUmaCategoria(index) {
    return pegarCategorias()[index];
}

function pegarPratos() {
    return restaurante.pratos;
}

function pegarPrato(id) {
    return pegarPratos().find(prato => prato.id === id);
}

function pratoExiste(id) {
    return pegarPrato(id) ? true : false;
}

function pegarChavesAtualizar() {
    return restaurante.chaves;
}

function criarPrato(nome, desc, preco, categIndex, disponivel=true) {
    const prato = {};

    prato.id          = pegarID();
    prato.nome        = nome;
    prato.descricao   = desc;
    prato.preco       = preco;
    prato.categoria   = pegarUmaCategoria(categIndex);
    prato.disponivel  = disponivel;

    return restaurante.pratos.push(prato);
}

function atualizarPratos(id, chave, valor) {
    const dados = pegarPratos();

    const prato = dados.find(prato => prato.id === id);

    prato[chave] = valor;

    return prato;
}

function excluirPrato(id) {
    const dados = pegarPratos();
    
    const index = dados.findIndex(prato => prato.id === id);
    if (index === -1) {
        return;
    }

    return dados.splice(index, 1);
}

function filtrarPrecoMaior(valor) {
    const dados = pegarPratos();

    return dados.filter(prato => prato.preco > valor);
}

function filtrarPrecoMenor(valor) {
    const dados = pegarPratos();

    return dados.filter(prato => prato.preco < valor);
}

function filtrarNome(valor) {
    const dados = pegarPratos();
    
    return dados.filter(prato => prato.nome.includes(valor));   
}

function filtrarCategoria(valor) {
    const dados = pegarPratos();

    return dados.filter(prato => prato.categoria === valor);
}

//------------------------------------------------------------------
// Lidar com a interface
function mostrarMenu() {
    const menu = `Escolha uma opção:
    1. Cadastro de Pratos
    2. Listagem de Pratos
    3. Busca de Pratos
    4. Atualização de Pratos
    5. Exclusão de Pratos
    0. Sair`;
    
    let opcao = Number(prompt(menu));
    while ( !(opcao >= 0 && opcao <= 5) ) {
        alert('Opção inválida. Insira um número entra 0 e 5.')
        opcao = Number(prompt(menu));        
    }

    return opcao;
}

function criarSaida(pratos) {
    return pratos.reduce( (mensagem, prato) => mensagem + `Id: ${prato.id}\nNome: ${prato.nome}\nDescrição: ${prato.descricao}\nPreço: R$${prato.preco}\nCategoria: ${prato.categoria}\nDisponível no menu: ${prato.disponivel ? 'Sim' : 'Não'}\n\n`, '');
}

function criarSaidaLinha(pratos) {
    return pratos.reduce((mensagem, prato, index) => mensagem + '\t' + (index + 1) + ' - ' + prato.nome + '\n');
}

function interfaceCadastrarPratos() {
    do {
        const nome = prompt('Insira o nome do prato:');
        const desc = prompt('Insira a descrição do prato')
        
        let preco = Number(prompt('Insira o preço do prato'));
        while ( preco <= 0 ) {
            preco = Number(prompt('Opção inválida. Insira um preço maior que zero.'));
        }
        
        const categorias = pegarCategorias();
        const mensagem = categorias.reduce((mensagem, categoria, index) => mensagem + '\t' (index+1) + ' - ' + categoria + '\n')
        let indiceCategoria = Number(prompt('Selecione o número da categoria do prato: \n\n' + mensagem));
        while (!(indiceCategoria > 0 && indiceCategoria <= categorias.length)) {
            alert('Valor inválido. Insira uma categoria válida.');
            indiceCategoria = Number(prompt('Selecione o número da categoria do prato: \n\n' + mensagem));
        }
        const disponivel = confirm('O prato está disponível no menu?')

        criarPrato(nome, desc, preco, indiceCategoria-1, disponivel);
        
    } while (confirm('Deseja cadastrar mais um prato?'));
}

function interfaceListarPratos() {
    do {
        // Definindo os dados
        let dados;
    
        const desejaFiltrar = confirm('Deseja filtrar os dados?');
        if (desejaFiltrar) {

            // Gerar mensagem
            const filtros = pegarFiltros();

            let mensagem = criarSaidaLinha(filtros);

            let opcao = Number(prompt('Insira o número da opção que dejesa filtrar: \n\n' + mensagem));
            while ( !(opcao >= 1 && opcao <= funcoesFiltro.length) ) {
                opcao = Number(prompt('Opção inválida. Selecione uma opção válida:\n\n' + mensagem));
            }
    
            opcao--;   // Diminuir o valor que o usuário passou para usar como índice.
    
            // Pegar valor do filtro
            const filtro = filtros[opcao];

            if (filtro.tipo === 'number') {
                valor = Number(prompt(filtro.mensagem));
                while ( isNaN(opcao) ) {
                    alert('Opção inválida! Insira um valor numérico.');
                    valor = Number(prompt(filtro.mensagem));
                }
            } else {
                valor = prompt(filtro.mensagem);
            }

            // Adicionando os dados filtrados
            dados = filtro.funcao(valor);
        } else {
            // Adicionando os dados brutos
            dados = pegarPratos();
        }
        
        // Mostrar lista de pratos na tela
        alert(criarSaida(dados) ?? 'Dados não encontrados!');
        
    } while (confirm('Deseja listar novamente?'));
}

function interfaceAtualizarPrato() {
    do {
        // Mostrar nomes e ids dos pratos
        const dados = pegarPratos();
        let mensagem = dados.reduce((mensagem, prato) => mensagem + `${prato.id} - ${prato.nome}\n`, '');

        let id = Number(prompt('Insira o ID do prato que deseja atualizar: \n\n' + mensagem));
        while ( !(opcao > 0 && opcao <= dados.length) ) {
            alert('Opção inválida. Insira um ID válido.')
            id = Number(prompt('Insira o ID do prato que deseja atualizar: \n\n' + mensagem));
        }
        
        const valoresAlteraveis = pegarChavesAtualizar();
        
        mensagem = 'Selecione o número de um valor que dejesa alterar:\n\n' + criarSaidaLinha(valoresAlteraveis);

        let selecao = Number(prompt('Insira o valor que deseja alterar no prato:\n\n' + mensagem));
        while ( !(opcao > 0 && opcao <= valoresAlteraveis.length) ) {
            alert('Opção inválida. Insira um número da lista.')
            selecao = Number(prompt('Insira o valor que deseja alterar no prato:\n\n' + mensagem));
        }

        const chave = valoresAlteraveis[selecao - 1];

        let valor = '';

        // Caso tenha um valor estrito, ele mostrará os que são permitidos e pedirá para escolher um.
        if (chave.valoresEstritos === null) {
            let mensagem = 'Selecione o número do novo valor: \n\n';

            mensagem += chave.valoresEstritos.reduce((mensagem, valor, index) => mensagem + '\t' + (index + 1) + ' - ' + valor + '\n');

            indice = Number(prompt(mensagem));
            while (!(indice > 0 && indice < chave.valoresEstritos.length)) {
                alert('Opção inválida! Insira um número dentro das opções.');
                indice = Number(prompt(mensagem));
            }

            valor = chave.valoresEstritos[indice - 1];
        } else {

            // Validar entrada de número
            if (chave.tipo === 'number') {
                valor = Number(prompt('Insira um novo valor para:' + chave.nome));
                while (isNaN(opcao)) {
                    alert('Opção inválida! Insira um valor numérico.');
                    valor = Number(prompt(chave.mensagem));
                }
                
                atualizarPratos(id, chave, valor);
                continue;
            }

            // Entrada de texto
            if (chave.tipo === 'string') {
                valor = prompt('Insira um novo valor para:' + chave.nome);
            }
            
            // Entrada de booleano
            if (chave.tipo === 'boolean') {
                valor = !pegarPrato(id)[chave];
            }
        }

        pratoAtualizado = atualizarPratos(id, chave, valor);
        mensagem = criarSaida(pratoAtualizado);

        alert(`Prato atualizado com sucesso!\n\n` + mensagem);

    } while (confirm('Deseja atualizar mais algum prato?'));
}

function interfaceExcluirPrato() {
    do {
        const dados = pegarPratos();
        const mensagem = criarSaidaLinha(dados);

        let id = Number(prompt('Insira o ID do prato que deseja excluir:\n\n' + mensagem));
        while ( !( id > 0 && id <= dados.length)) {
            alert('ID inválido! Insira um valor da lista.');
            id = Number(prompt('Insira o ID do prato que deseja excluir:\n\n' + mensagem));
        }

        const pratoExcluido = excluirPrato(id);
        
        alert(`Prato ${pratoExcluido.nome} excluído com sucesso\n\n` + criarSaida());
    } while (confirm('Deseja excluir outro prato?'));
}

function seeder() {
    const pratos = [
        {
            nome: 'Risoto de Funghi',
            descricao: 'Risoto cremoso com cogumelos funghi e parmesão',
            preco: 28.99,
            categoria: 'Prato Principal',
            disponivel: true
        },
        {
            nome: 'Mousse de Chocolate Belga',
            descricao: 'Delicioso mousse de chocolate belga com raspas de laranja',
            preco: 15.99,
            categoria: 'Sobremesa',
            disponivel: true
        },
        {
            nome: 'Carpaccio de Salmão',
            descricao: 'Finas fatias de salmão marinado com azeite de oliva e alcaparras',
            preco: 22.99,
            categoria: 'Entrada',
            disponivel: true
        },
        {
            nome: 'Tagliatelle ao Pesto',
            descricao: 'Massa fresca tagliatelle com molho pesto e tomates cereja',
            preco: 20.99,
            categoria: 'Prato Principal',
            disponivel: true
        },
        {
            nome: 'Tarte Tatin',
            descricao: 'Clássica torta francesa de maçã caramelizada',
            preco: 18.99,
            categoria: 'Sobremesa',
            disponivel: true
        },
        {
            nome: 'Salada Caprese',
            descricao: 'Salada refrescante com tomate, muçarela de búfala e manjericão',
            preco: 16.99,
            categoria: 'Entrada',
            disponivel: true
        },
        {
            nome: 'Paella Marinera',
            descricao: 'Paella espanhola com frutos do mar e açafrão',
            preco: 30.99,
            categoria: 'Prato Principal',
            disponivel: true
        },
        {
            nome: 'Tiramisu',
            descricao: 'Clássica sobremesa italiana com café e queijo mascarpone',
            preco: 12.99,
            categoria: 'Sobremesa',
            disponivel: true
        },
        {
            nome: 'Bruschetta de Tomate',
            descricao: 'Fatias de pão italiano cobertas com tomate, alho e manjericão',
            preco: 14.99,
            categoria: 'Entrada',
            disponivel: true
        },
        {
            nome: 'Sushi Misto',
            descricao: 'Seleção de sushis e sashimis frescos',
            preco: 25.99,
            categoria: 'Prato Principal',
            disponivel: true
        },
        {
            nome: 'Cheesecake de Frutas Vermelhas',
            descricao: 'Cheesecake cremoso com calda de frutas vermelhas',
            preco: 17.99,
            categoria: 'Sobremesa',
            disponivel: true
        },
        {
            nome: 'Ceviche de Camarão',
            descricao: 'Ceviche refrescante com camarões frescos e limão',
            preco: 18.99,
            categoria: 'Entrada',
            disponivel: true
        },
        {
            nome: 'Ravioli de Abóbora',
            descricao: 'Ravioli recheado com purê de abóbora ao molho de manteiga e sálvia',
            preco: 21.99,
            categoria: 'Prato Principal',
            disponivel: true
        },
        {
            nome: 'Panna Cotta',
            descricao: 'Panna cotta italiana com calda de caramelo',
            preco: 13.99,
            categoria: 'Sobremesa',
            disponivel: true
        },
        {
            nome: 'Gyoza de Vegetais',
            descricao: 'Pastéis japoneses recheados com vegetais e molho de soja',
            preco: 16.99,
            categoria: 'Entrada',
            disponivel: true
        },
        {
            nome: 'Filet Mignon ao Molho de Vinho Tinto',
            descricao: 'Suculento filet mignon grelhado com molho de vinho tinto',
            preco: 32.99,
            categoria: 'Prato Principal',
            disponivel: true
        },
        {
            nome: 'Mousse de Maracujá',
            descricao: 'Mousse leve de maracujá com calda de frutas tropicais',
            preco: 14.99,
            categoria: 'Sobremesa',
            disponivel: true
        },
        {
            nome: 'Salada de Quinoa',
            descricao: 'Salada nutritiva com quinoa, vegetais e molho de mostarda',
            preco: 19.99,
            categoria: 'Entrada',
            disponivel: true
        },
        {
            nome: 'Nigiri de Salmão',
            descricao: 'Nigiri de sushi com fatia de salmão fresco sobre arroz',
            preco: 23.99,
            categoria: 'Prato Principal',
            disponivel: true
        }
    ];
    pratos.forEach(prato => {
        const { nome, descricao, preco, categoria, disponivel } = prato;
        const categoriaIndex = pegarCategorias().indexOf(categoria);
        criarPrato(nome, descricao, preco, categoriaIndex, disponivel);
    });
}

seeder();
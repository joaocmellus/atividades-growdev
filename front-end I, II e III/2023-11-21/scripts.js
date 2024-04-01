const Database = {
    products: {
        idCounter: 0,
        registers: [],
    },
    users: {
        idCounter: 0,
        registers: [],
    },
    history: {
        idCounter: 0,
        registers: [],
    },
    cart: {
        idCounter: 0,
        registers: [],
    },
};

const loggedUser = {
    id: null,
    username: null,
    permission: null
}

// Usuário
function createUser(username, password, permission) {
    const table = Database.users;

    // validar se o username já existe no DB
    const index = table.registers.find(user => user.username === username);

    // Se existir, retorna.
    if (index) {
        return;
    }

    // Criar usuário
    const id = ++table.idCounter;
    const user = {
        id: id,
        username: username,
        password: password,
        permission: permission
    }

    if (permission == 2) {
        createCart(id);
    }

    table.registers.push(user);

    return user;
}

function login(username, password) {
    const table = Database.users;

    // Procurar registro
    const register = table.registers.find(user => user.username === username && user.password === password);

    // Se o usuário existir: logar
    if (register) {
        loggedUser.id = register.id;
        loggedUser.username = register.username;
        loggedUser.permission = register.permission;
        return loggedUser;
    }

    return null;
}

function is_logged() {
    return loggedUser.id ? true : false;
}

function logout() {
    loggedUser.id = null;
    loggedUser.username = null;
    loggedUser.permission = null;
}

// Cart
function createCart(user_id) {
    const table = Database.cart;

    // Criar carrinho de comprar associado a um usuário
    const cart = {
        id: ++table.idCounter,
        items: [],
        total: 0,
        user_id
    }

    table.registers.push(cart);
}

function getCartByUserID(user_id) {
    const table = Database.cart;

    return table.registers.find(cart => cart.user_id === user_id);
}

function addToCart(user_id, product_id, quantity) {
    const cart = getCartByUserID(user_id);

    // Procurar se já existe o produto no carrinho
    const item = cart.items.find(item => item.product_id === product_id);

    // Caso exista, validar se não excede a quantidade total do produto
    if (item) {
        const product = getProduct(product_id);

        if ((item.quantity + quantity) > product.quantity) {
            item.quantity = quantity;
            return;
        }

        item.quantity += quantity;
        return
    }

    // Criar um produto do zero
    cart.items.push({
        product_id,
        quantity
    });
}

// Product
// Utils
function productExists(id) {
    const table = Database.products;

    // Verifica se o registro referente ao ID existe.
    return table.registers.find(product => product.id === id) ? true : false;
}

// Create
function createProduct(name, quantity, price) {
    const table = Database.products;

    // Criar produto
    const product = {
        id: ++table.idCounter,
        name: name,
        quantity: quantity,
        price: price
    }

    table.registers.push(product);

    return product;
}

// Read
function getProducts() {
    const table = Database.products;

    return table.registers;
}

function getProduct(id) {
    const table = Database.products;

    const product = table.registers.find(product => product.id === id);

    if (!product) {
        return;
    }
    return product;
}

// Update
function updateProduct(id, key, value) {
    console.log(id, key, value);
    const product = getProduct(id);

    if (product) {
        product[key] = value;

        return product;
    }
    return;
}

// Delete
function deleteProduct(id) {
    const table = Database.products;

    if (productExists(id)) {
        const productIndex = table.registers.findIndex(product => product.id === id);
        const deletedProduct = table.registers.splice(productIndex, 1);

        return deletedProduct;
    }

    return;
}

// Order History
function createOrderHistory(user_id, date = null) {
    const table = Database.history;

    const cart = getCartByUserID(user_id);
    const historyContent = cart.items.splice(0, cart.items.length);

    historyContent.forEach(register => {
        const product = getProduct(register.product_id);

        product.quantity -= register.quantity;

        register.soldPrice = product.price;
    });

    if (!date) {
        date = new Date();
    }
    const history = {
        id: ++table.idCounter,
        date: date.toISOString().split('T')[0],
        order: historyContent,
        user_id: user_id,
    }

    table.registers.push(history)
}

function getOrderHistories(date = null) {
    const table = Database.history;

    if (!date) {
        return table.registers;
    }

    const history = table.registers.filter(history => history.date === date);

    if (!history) {
        return;
    }

    return history;
}

function filterOrderHistories(initialDate, finalDate) {
    const table = Database.history;

    const history = table.registers.filter(history => history.date >= initialDate && history.date <= finalDate);

    if (!history) {
        return;
    }

    return history;
}

// Lidar com a interface
function outputInline(products) {
    if (Array.isArray(products)) {
        return products.reduce((message, product) => {
            if (loggedUser.permission === 1) {
                message += `ID: ${product.id} | `;
            }
            return message + `Nome: ${product.name} | Estoque: ${product.quantity} | Preço: ${product.price.toFixed(2)}\n`;
        }, '');
    }
    if (typeof products === 'object') {
        let message = '';
        if (loggedUser.permission === 1) {
            message += `ID: ${products.id} | `;
        }
        return message + `Nome: ${products.name} | Estoque: ${products.quantity} | Preço: ${products.price.toFixed(2)}\n`;
    }
    console.error('Dados inválidos inseridos.')
}

function showMenu(permission) {
    // Admin
    let option;
    if (permission == 1) {
        const menu = `Escolha uma opção:\n1. Listagem de produtos\n2. Adicionar produto\n3. Atualizar produtos\n4. Remover produto\n5. Somar valor do estoque\n6. Relatórios\n0. Sair`;

        option = Number(prompt(menu));
        while (!(option >= 0 && option <= 6)) {
            alert('Opção inválida. Insira um número entra 0 e 6.')
            option = Number(prompt(menu));
        }

    } else if (permission == 2) {
        const menu = `Escolha uma opção:\n1. Ver produtos\n2. Ver carrinho\n3. Finalizar compra\n0. Sair`;

        option = Number(prompt(menu));
        while (!(option >= 0 && option <= 3)) {
            alert('Opção inválida. Insira um número entra 0 e 3.')
            option = Number(prompt(menu));
        }
    }

    return option;
}

function createProductInterface() {
    do {
        const name = prompt('Insira o nome do produto:')

        let quantity = Number(prompt('Insira a quantidade em estoque do produto:'));
        while (!(quantity > 0 && Number.isInteger(quantity))) {
            quantity = Number(prompt('Valor inválido. Insira um valor maior que zero:'));
        }

        let price = Number(prompt('Insira preço do produto:'));
        while (!(price > 0)) {
            price = Number(prompt('Valor inválido. Insira um valor maior que zero:'));
        }

        createProduct(name, quantity, price);
    } while (confirm('Deseja adicionar mais algum produto?'));
}

function listProductsInterface() {
    const products = getProducts();

    alert(`Atualmente há ${products.length} produtos cadastrados:\n\n` + outputInline(products));
}

function updateProductInterface() {
    do {
        let id = Number(prompt('Insira o ID do produto que deseja alterar:'));
        while (!(productExists(id))) {
            id = Number(prompt('ID não encontrado. Insira um ID válido:'));
        }

        const keys = [
            {
                name: 'Nome',
                key: 'name',
                type: 'string',
            },
            {
                name: 'Quantidade',
                key: 'quantity',
                type: 'number',
            },
            {
                name: 'Preço',
                key: 'price',
                type: 'number',
            }
        ];

        const message = keys.reduce((message, value, index) => message + `    ${index + 1} - ${value.name}\n`, '\n');
        const productOutput = outputInline(getProduct(id));

        let option = Number(prompt('Insira o número do valor que deseja atualizar:\n\n' + productOutput + message));
        while (!(option > 0 && option <= 3)) {
            option = Number(prompt('Opção inválida. Insira o número do valor que deseja atualizar:\n' + productOutput + message))
        }

        const key = keys[option - 1];

        let value;
        if (key.type == 'string') {
            value = prompt('Insira um novo valor para: ' + key.name);
        } else {
            value = Number(prompt('Insira um novo valor para: ' + key.name));
            while (!(value >= 0)) {
                value = Number(prompt('Valor inválido. Insira um valor maior ou igual a zero para: ' + key.name));
            }
        }

        updateProduct(id, key.key, value);
    } while (confirm('Deseja atualizar mais algum produto?'));
}

function sumStockValue() {
    const products = getProducts();
    let message = '';
    let total = 0;
    products.forEach(product => {
        const value = product.price * product.quantity;

        // Mostrar o valor individual em cada produto.
        message += `${product.name}: R$${value.toFixed(2)}\n`;

        // Somar o valor individual ao total
        total += value;
    });
    alert(`A soma total do seu estoque de produtos atualmente é R${total.toFixed(2)}\n\n` + message);
}

function showProductsInterface() {
    let runLoop = true;
    do {
        // Criar cópia do array de objetos
        const productsList = [...getProducts()];
        productsList.sort((a, b) => {
            // Ignorar o Case Sensitive durante a ordenação
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        // Criar mensagem
        const message = productsList.reduce((message, product, index) => message + (index + 1) + ' - ' + outputInline(product), '');
        alert(`Produtos disponíveis para compra: \n\n` + message)

        const addProduct = confirm('Deseja adicionar um produto ao carrinho?');
        if (addProduct) {
            const addedToCart = updateCartInterface(productsList);

            if (addedToCart) {
                runLoop = confirm('Deseja adicionar outro produto?');
            } else {
                runLoop = false;
            }
        } else {
            runLoop = false;
        }
    } while (runLoop);
}

function updateCartInterface(productsList) {
    let num;
    num = Number(prompt('Insira o número do produto que deseja:'));
    while (!((num >= 1 && num <= productsList.length) || num === 0)) {
        num = Number(prompt('Número inválido. Insira um número válido para um produto:'));
    }

    // Validar se o usuário apertou para cancelar
    if (num === 0) {
        return;
    }

    const product = productsList[num - 1];

    let quantity = Number(prompt('Insira a quantidade que deseja levar:'));
    while (!(quantity > 0 && quantity <= product.quantity)) {
        quantity = Number(prompt('Valor inválido. Insira uma quantidade válida:'));
    }

    addToCart(loggedUser.id, product.id, quantity);
    return true;
}

function showCartInterface() {
    const cart = getCartByUserID(loggedUser.id);

    let total = 0;
    const message = cart.items.reduce((message, item, index) => {
        const product = getProduct(item.product_id);

        const totalValue = product.price * item.quantity;
        total += totalValue;

        return message + (index + 1) + ' - ' + `${product.name} | ${item.quantity} un. | R$${totalValue}\n`;
    }, '');

    alert(`Itens do pedido:\n\nValor total do pedido: R$${total}\n\n` + message);
}

function finishOrder() {
    const cart = getCartByUserID(loggedUser.id);

    const total = cart.items.reduce((total, item) => total + getProduct(item.product_id).price * item.quantity, 0);

    createOrderHistory(loggedUser.id);

    alert('Valor total do pedido: R$' + total.toFixed(2));
}

function checkRelatories() {
    runLoop = true;
    do {
        let opt = Number(prompt('Qual relatório deseja ver:\n\n1 - Relatório do dia\n2 - Relatórios anteriores\n0 - Voltar'));
        while (!(opt >= 0 && opt <= 2)) {
            opt = Number(prompt('Valor inválido. Insira o número da opção deseja ver:\n\n1 - Relatório do dia\n2 - Relatórios anteriores\n0 - Voltar'));
        }

        const date = new Date().toISOString().split('T')[0];
        let registers = [];
        let dates = [];
        if (opt === 1) {
            dates.push(date);
            registers = getOrderHistories(date);

        } else if (opt === 2) {
            // Array das datas que estão nos registros
            const options = [];

            // Adicionar datas únicas ao array
            getOrderHistories().forEach(history => {
                const date = history.date;
                if (!options.includes(date)) {
                    options.push(date);
                }
            });

            // Ordenar as datas
            options.sort((a, b) => new Date(a) - new Date(b));

            // Criar mensagem a partir do array ordenado.  
            const message = options.reduce((message, opt, index) => message + (index + 1) + ' - ' + opt.split('-').reverse().join('/') + '\n', '');

            let initial = Number(prompt('Insira o número da data inicial para visualizar:\n\n' + message));
            while (!((initial >= 1 && initial <= options.length))) {
                initial = Number(prompt('Número inválido. Insira um número válido para o filtro:\n\n' + message));
            }

            let final = 0;
            const finalOptions = options.slice(initial);
            if (finalOptions.length !== 0) {
                // Criar mensagem a partir do novo array filtrado com as opções restantes.
                const message = finalOptions.reduce((message, opt, index) => message + (index + 1) + ' - ' + opt.split('-').reverse().join('/') + '\n', '');

                final = Number(prompt('Insira o número da data final para aplicar o filtro:\n\n' + message));
                while (!(final >= 1 && final <= finalOptions.length)) {
                    final = Number(prompt('Número inválido. Insira um número válido para aplicar o filtro:\n\n' + message));
                }
            }
            initial -= 1;

            dates = options.slice(initial, initial + final + 1);
            registers = filterOrderHistories(options[initial], options[initial + final]);
        } else {
            runLoop = false;
        }

        if (registers.length !== 0) {

            // Ordenar registro retornados
            registers.sort((a, b) => new Date(a.date) - new Date(b.date));

            // Separar e somar todas as vendas de cada dia.
            const finalData = {}
            dates.map(date => {
                const filteredData = registers.filter(register => register.date === date);

                const data = {
                    total: 0,
                }

                filteredData.forEach(order => {
                    console.log(order)
                    order.order.forEach(item => {
                        if (data[item.product_id]) {
                            data[item.product_id].quantity += item.quantity;
                        } else {
                            data[item.product_id] = {
                                quantity: item.quantity,
                                soldPrice: item.soldPrice
                            };
                        }
                        data.total += item.soldPrice * item.quantity;
                    });
                });

                finalData[date] = data;
            });

            // Mostrar registros para o usuário
            let finalTotal = 0;
            let message = '';

            for (const date in finalData) {
                message += '\n' + date.split('-').reverse().join('/') + '\n';
                for (const key in finalData[date]) {
                    if (key !== 'total') {
                        const order = finalData[date][key]
                        const product = getProduct(Number(key));
                        const messagemPart = `    ${product.name} | ${order.quantity} un. | Preço de venda: R$${order.soldPrice} | Total: R$${order.soldPrice * order.quantity}\n`;
                        message += messagemPart;
                    } else {
                        finalTotal += finalData[date][key];
                    }

                }
            }

            alert('Relatórios de faturamento:\nFaturamento total: R$' + finalTotal + '\n' + message);

            runLoop = confirm('Deseja checar novamente os relatórios?');
        } else {
            runLoop = false;
        }
    } while (runLoop)
}

function loginInterface() {
    let userChoice;

    do {
        userChoice = prompt("Escolha uma opção:\n1. Logar\n2. Criar conta\n0. Sair");

        switch (userChoice) {
            case "1":
                // Opção de login
                const loginUsername = prompt("Digite seu nome de usuário:");
                const loginPassword = prompt("Digite sua senha:");
                
                // Chamar a função de login
                const loginSuccess = login(loginUsername, loginPassword);

                if (loginSuccess) {
                    alert("Login bem-sucedido!");
                    return;
                } else {
                    alert("Falha no login. Verifique suas credenciais.");
                }
                break;

            case "2":
                // Opção de criar conta
                const createUsername = prompt("Digite um nome de usuário para criar conta:");
                const createPassword = prompt("Digite uma senha para criar conta:");

                // Chamar a função de criar usuário
                const createUserSuccess = createUser(createUsername, createPassword, 2);

                if (createUserSuccess) {
                    alert("Conta criada com sucesso!");
                    login(createUsername, createPassword);
                    return;
                } else {
                    alert("Falha ao criar conta. Verifique suas informações.");
                }
                break;

            case "0":
                alert("Saindo...");
                break;
            
            case null:
                alert("Saindo...");
                break;

            default:
                alert("Opção inválida. Por favor, escolha uma opção válida.");
        }
        if (userChoice === '3') {
            return;
        }

    } while (!(userChoice === "0" || userChoice === null));
}


function main() {
    let runAplication = true;

    while (runAplication) {
        // Verfificar se o usuário está logado.
        if (is_logged()) {
            const permission = loggedUser.permission;

            // Lógica para cada permissão de usuário
            if (permission == 1) {
                let runLoop = true;

                while (runLoop) {
                    const option = showMenu(permission);

                    switch (option) {
                        case 1:
                            listProductsInterface();
                            break;
                        case 2:
                            createProductInterface();
                            break;
                        case 3:
                            updateProductInterface();
                            break;
                        case 4:
                            deleteProduct()
                            break;
                        case 5:
                            sumStockValue();
                            break;
                        case 6:
                            checkRelatories();
                            break;
                        case 0:
                            runLoop = false;
                            logout()
                            break;
                    }
                }
            }
            else if (permission == 2) {
                runLoop = true;

                while (runLoop) {
                    const option = showMenu(permission);

                    switch (option) {
                        case 1:
                            showProductsInterface();
                            break;
                        case 2:
                            showCartInterface();
                            break;
                        case 3:
                            finishOrder();
                            break;
                        case 0:
                            runLoop = false;
                            logout()
                            break;
                    }
                }
            }
        } else {
            loginInterface()
            if (!is_logged()) {
                runAplication = false;
            }
        }
    }
}

debug();
main();

// ------------------------------------   DEBUG  ---------------------------------------------
function debug() {
    
    function seedProducts() {
        const registrosPadaria = [
            { name: 'Pão Francês', quantity: 50, price: 1.50 },
            { name: 'Croissant', quantity: 30, price: 2.00 },
            { name: 'Baguete', quantity: 20, price: 3.00 },
            { name: 'Pão de Forma Integral', quantity: 40, price: 2.50 },
            { name: 'Rosquinha de Canela', quantity: 25, price: 1.75 },
            { name: 'Bolo de Chocolate', quantity: 10, price: 15.00 },
            { name: 'Pastel de Nata', quantity: 15, price: 2.50 },
            { name: 'Muffin de Blueberry', quantity: 18, price: 2.75 },
            { name: 'Pão de Queijo', quantity: 35, price: 1.80 },
            { name: 'Torta de Morango', quantity: 12, price: 12.50 },
            { name: 'Coxinha', quantity: 22, price: 2.25 },
            { name: 'Eclair', quantity: 8, price: 3.50 },
            { name: 'Torta de Maçã', quantity: 14, price: 10.00 },
            { name: 'Sonho', quantity: 28, price: 2.20 },
            { name: 'Pão de Alho', quantity: 25, price: 1.75 },
            { name: 'Empada de Frango', quantity: 20, price: 2.75 },
            { name: 'Cachorro-Quente', quantity: 15, price: 3.00 },
            { name: 'Pão Australiano', quantity: 30, price: 2.80 },
            { name: 'Bolo de Cenoura', quantity: 10, price: 14.00 },
            { name: 'Pão Integral com Sementes', quantity: 18, price: 2.50 }
        ];
    
        registrosPadaria.forEach(product => createProduct(product.name, product.quantity, product.price));
        console.log('seedProducts');
    }
    function createUserJoao() {
        const user = {
            username: 'admin',
            password: '123',
            permission: 1
        }
    
        createUser(user.username, user.password, user.permission);
    };

    seedProducts();
    createUserJoao();
    
    createUser('user1', '123', 2);
    createUser('user2', '123', 2);
    createUser('user3', '123', 2);
    createUser('user4', '123', 2);
    
    login('user1', '123');
    addToCart(loggedUser.id, 1, 2);
    addToCart(loggedUser.id, 2, 2);
    addToCart(loggedUser.id, 3, 1);
    addToCart(loggedUser.id, 4, 3);
    createOrderHistory(loggedUser.id);
    logout();
    
    login('user4', '123');
    addToCart(loggedUser.id, 1, 2);
    addToCart(loggedUser.id, 2, 2);
    addToCart(loggedUser.id, 3, 1);
    addToCart(loggedUser.id, 4, 3);
    createOrderHistory(loggedUser.id);
    logout();
    
    login('user2', '123');
    addToCart(loggedUser.id, 5, 2);
    addToCart(loggedUser.id, 6, 2);
    addToCart(loggedUser.id, 7, 1);
    addToCart(loggedUser.id, 8, 3);
    createOrderHistory(loggedUser.id, new Date(2021, 10, 10))
    logout();
    
    login('user3', '123');
    addToCart(loggedUser.id, 9, 2);
    addToCart(loggedUser.id, 10, 2);
    addToCart(loggedUser.id, 11, 1);
    addToCart(loggedUser.id, 12, 3);
    addToCart(loggedUser.id, 13, 2);
    addToCart(loggedUser.id, 14, 2);
    addToCart(loggedUser.id, 15, 1);
    addToCart(loggedUser.id, 16, 3);
    createOrderHistory(loggedUser.id, new Date(2020, 10, 10));
    logout();
    
    alert(`Dados de DEBUG:
        Contas com permissão administrativa:
            User: admin
            Senha: 123
    
        Contas com permissão de usuário:
            User: user10
            Senha: 123
    
            User: user2
            Senha: 123
    
            User: user3
            Senha: 123
    
            User: user4
            Senha: 123`);
    // ------------------------------------   DEBUG  --------------------------------------------- 
}
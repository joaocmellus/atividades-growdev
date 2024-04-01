const Database = {
    tasks: {
        idCounter: 0,
        registers: [],
    },
    users: {
        idCounter: 0,
        registers: [],    
    }
};

const User = {
    id: null,
    username: null
}

function createTask(title, description) {
    if (is_logged()) {
        if (!title || !description) {
            console.log('Valor inválido inserido!')
            return;
        }
        const table = Database.tasks;
        
        
        const task = {
            id: ++table.idCounter,
            title: title,
            description: description,
            completed: false,
            fk: User.id
        };
        
        table.registers.push(task);
    } else {
        console.log('Você não está logado')
    }
}

function listTasks() {
    if (is_logged()) {
        const table = Database.tasks;
        const registers = table.registers.filter(task => task.fk === User.id);

        registers.forEach(register => console.log(`Id: ${register.id}\nTítulo: ${register.title}\nDescrição: ${register.description}\nStatus: ${register.completed ? 'Completo' : 'Não completo'}`));
        return;
    }
    console.log('Você não está logado')
}

function updateTaskStatus(id, completed) {
    if (is_logged()) {
        if (!id || !completed) {
            console.log('Valor inválido inserido!')
            return;
        }
        const table = Database.tasks;

        const register = table.registers.find(task => id === task.id);
        console.log(register);
        if (register) {
            register.completed = completed;
            console.log('Status alterado com sucesso!')
            return;
        }
        console.log('O registro não foi encontrado.')
    } else {
        console.log('Você não está logado.')
    }
}

function deleteTask(id) {
    if (is_logged()) {
        if (!id) {
            console.log('Valor inválido inserido!')
            return;
        }
        const table = Database.tasks;

        const index = table.registers.findIndex(task => id === task.id)

        if (index) {
            const register = table.registers.splice(index, 1);
            console.log(`Registro com id=${id} excluído com sucesso!`);
            console.log(register);
            return register;
        }
    } else {
        console.log('Você não está logado!')
    }
}

// Usuário
function createUser(username, password) {
    if (!username || !password) {
        console.log('Valores faltando!')
        return;
    }
    const table = Database.users;
    
    // verificar no BD
    const index = table.registers.find(user => user.username === username);

    if (index) {
        console.log('O usuário já existe!')
        return;
    }

    const user = {
        id: ++table.idCounter,
        username: username,
        password: password,
    }
    
    table.registers.push(user)
    console.log('Usuário criado com sucesso!')
}

function login(username, password) {
    if (!username || !password) {
        console.log('Valores inseridos inválidos!')
        return;
    }
    const table = Database.users;

    const register = table.registers.find(user => user.username === username && user.password === password);
    
    if (register) {
        User.id = register.id;
        User.username = register.username;
        console.log('Bem-vindo(a) ', register.username);
        return;
    }
    console.log('Usuário ou senha inválidos!')
}

function is_logged() {
    return User.id ? true : false;
}

function logout() {
    if (is_logged()) {
        console.log(`Você foi deslogado ${User.username}`);
    
        User.id = null;
        User.username = null;
        return;
    }
    console.log('Você já está deslogado!                                        ')
}

//DEBUG
createUser('joaomellus', '123');
login('joaomellus', '123');

createTask('1', 'ffWQEFWEeVEWwEWEfWew')
createTask('2', 'ffewfRVNIORVNIOERIOew')
createTask('3', 'ffewfBETBEew')
createTask('4', 'ffewfeQEWRRBEw')
createTask('5', 'ffewfQQWWew')
createTask('6', 'ffEWEWewfew')

listTasks()

deleteTask(2)

updateTaskStatus(3, true)

listTasks()

logout()

listTasks()


///// GRUPO:
// Bruno
// Cristian
// João
// Marco
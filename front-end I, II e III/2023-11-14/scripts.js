// Data Handlers
const Cars = {
    idCounter: 0,
    registers: [],
    id: () => ++Cars.idCounter,
    scheme: {
        'model': 'string',
        'brand': 'string',
        'year':  'number',
        'color': 'string',
        'price': 'number'
    },
    allowedFilterKeys: ['color', 'price']
};

function getCarByID(id) {
    return Cars.registers.find(car => id === car.id) ?? null;
}

function isValidData(car, verifyAllData = true) {
    if (verifyAllData) {
        const carkeys = Object.keys(car);
        const schemeKeys = Object.keys(Cars.scheme);

        if (!(carkeys.length === schemeKeys.length && carkeys.every((item) => schemeKeys.includes(item)))) {
            return false;
        }
    }

    for (const key in car) {
        const validType = Cars.scheme[key];
        
        let value = car[key];

        if (validType === 'number') {
            if (isNaN(Number(car[key]))) {
                return false;
            }
            continue;
        }
        
        if (typeof value !== validType) {
            return false;
        }
    }
    return true;
}

function createCar(car) {
    if (!isValidData(car)) {
        console.error('Valor incorreto passado como parâmetro.')
        return;
    }
    car.id = Cars.id();

    car.year  = Number(car.year);
    car.price = Number(car.price);
    
    Cars.registers.push(car);
    return car;
}

function getCars(brand = null) {
    if (!brand) {
        return Cars.registers;
    }
    return Cars.registers.filter(car => car.brand === brand);
}

function updateCar(id, key, value) {
    
    if (!Cars.allowedFilterKeys.some(allowedKey => allowedKey === key)) {
        console.error(`Chave não permitida para alteração.`)
        return;
    }

    const register = getCarByID(id);
    if (!register) {
        return;
    }

    register[key] = value;
    return register;
}

function deleteCar(id) {
    if (!id) {
        console.error('Parâmetro não passado.')
        return;
    }
    const index = Cars.registers.findIndex(car => id === car.id);

    if (index == undefined) {
        return;
    }

    return Cars.registers.splice(index, 1);
}

// Interface handlers
function getMenuOption() {
    const message = `Escolha uma das opções para interagir com o sistema:
    1 - Cadastrar veículo
    2 - Listar todos os veículos
    3 - Filtrar veículos por marca
    4 - Atualizar veículo
    5 - Remover veículo
    6 - Sair do sistema`

    const allowed = ['1', '2', '3', '4', '5', '6'];

    do {
        const input = prompt(message);
        let isValid = allowed.some(option => option === input);

        if (isValid) {
            return input;
        }
        alert('Valor inválido inserido. Escolha uma opção entre 1 e 6.')
    } while (true);

}

function addCarInterface() {
    do {
        const car = {};
        car.model = prompt('Insira o Modelo do carro:');
        car.brand = prompt('Insira a Marca do carro:');

        let year = Number(prompt('Insira o ano do carro:'));
        const actualYear = new Date().getFullYear();
        while (!(year > 0 && year <= actualYear && Number.isInteger(year))) {
            year = Number(prompt('Valor incorreto. Insira um ano válido:'));
        }
        car.year = year;
        car.color = prompt('Insira a cor do carro:');
        
        let price = Number(prompt('Insira o preço do carro'));
        while (!(price > 0)) {
            price = Number(prompt('Valor incorreto. Insira um preço válido:'));
        }
        car.price = price;

        const created = createCar(car);
        const message = created ? `Carro adicionado com sucesso!\n\n ${createListOutput(created)}` : 'Erro ao adicionar carro.';

        alert(message);

    } while (confirm('Deseja adicionar mais um carro?'));
}

function createListOutput(cars) {
    if (typeof cars === 'object') {
        if (!Array.isArray(cars)) {
            return `ID: ${cars.id} | Modelo: ${cars.brand} | Cor: ${cars.color} | Preço: R$${cars.price}\n`;
        }
        let list = ''
        cars.forEach(car => list += `ID: ${car.id} | Modelo: ${car.brand} | Cor: ${car.color} | Preço: R$${car.price}\n`);

        return list;
    }
    return null;
}

function listCarInterface() {
    const cars = getCars()

    const list = createListOutput(cars);

    alert(`Atualmente estão cadastrados ${cars.length} carros.\n\n` + list);
}

function updateCarInterface() {
    // receber id
    let inputId = Number(prompt('Insira o ID do carro:'))
    let car = getCarByID(inputId);
    while (!car) {
        let inputId = Number(prompt('ID inválido. Insira um ID existente:'))
        car = getCarByID(inputId);
    }

    // receber filtro
    let message = '';
    Cars.allowedFilterKeys.forEach((value, index) => {
        message += `${index+1} - ${value}\n`;
    });

    let keyIndex = Number(prompt('Insira o número da opção que deseja alterar no veículo:\n\n' + message));
    while ( !(keyIndex > 0) && !(keyIndex <= Object.keys(allowedFilterKeys).length)) {
        keyIndex = Number(prompt('Opção inválida. Insira um número da lista.\n\n' + message))
    }
    
    const updateKey = Object.keys(allowedFilterKeys)[keyIndex];

    // Receber valor da alteração
    let value = prompt(`Insira o valor para alteração de ${updateKey}:`);
    while ( !isValidData({ updateKey : value }, false) ) {
        value = prompt(`Insira um valor válido para a alteração de ${updateKey}:`);
    }

    const updatedCar = updateCar(inputId, updateKey, value);
    alert('Registro alterado com sucesso!\n\n' + createListOutput(updatedCar));
}

function filterCarInterface() {
    do {
        const brands = [];
        Cars.registers.forEach(car => !brands.includes(car.brand) ? brands.push(car.brand) : null);
        brands.sort();
    
        let message = '';
        brands.forEach((brand, index) => message += `${index + 1} - ${brand}\n`);
    
        let input = Number(prompt('Insira o número da marca que deseja filtrar:\n\n' + message));
        while (!brands[input - 1] || input <= 0) {
            input = Number(prompt('Valor inválido. Insira o número de uma marca que esteja na lista:\n\n' + message ));
        }
    
        const brand = brands[input - 1];
        const filtered = Cars.registers.filter(car => car.brand === brand);
    
        alert(`Atualmente estão cadastrados ${filtered.length} carros da marca ${brand}.\n\n` + createListOutput(filtered));
    } while (confirm('Deseja filtrar outra marca?'));
}

function removeCarInterface() {
    // receber id
    do {
        let inputId = Number(prompt('Insira o ID do carro a ser removido (digite 0 para parar):'))
        let car = getCarByID(inputId);
        while (!car) {
            if (inputId === 0) {
                if (confirm('Deseja parar a operação?')) {
                    return;
                }
            }
            inputId = Number(prompt( inputId === 0 ? 'Insira o ID do carro a ser removido:' : 'ID inválido. Insira um ID existente:'));
            car = getCarByID(inputId);
        }
    
        const removedRegister = deleteCar(inputId);
        alert('Registro removido com sucesso!\n\n' + createListOutput(removedRegister));
    } while (confirm('Deseja remover outro carro?'));
}

// Aplicação
function main() {
    alert(`Bem - vindo ao sistema de CRUD de veículos. \nNo momento, o sistema tem ${Cars.registers.length} carros cadastrados.`);
    do {
        const option = getMenuOption();

        switch (option) {
            case '1':
                addCarInterface();
                break;
            case '2':
                listCarInterface();
                break;
            case '3':
                filterCarInterface();
                break;
            case '4':
                updateCarInterface();
                break;
            case '5':
                removeCarInterface();
                break;
            default:
                return;
        }

    } while (true);
}

seedCars();
main();

// DEBUG SECTION
function seedCars() {
    const data = [
        {
            "model": "Civic",
            "brand": "Honda",
            "year": 2020,
            "color": "Prata",
            "price": 75000
        },
        {
            "model": "Corolla",
            "brand": "Toyota",
            "year": 2021,
            "color": "Branco",
            "price": 80000
        },
        {
            "model": "Golf",
            "brand": "Volkswagen",
            "year": 2019,
            "color": "Azul",
            "price": 70000
        },
        {
            "model": "Mazda3",
            "brand": "Mazda",
            "year": 2022,
            "color": "Vermelho",
            "price": 85000
        },
        {
            "model": "Camry",
            "brand": "Toyota",
            "year": 2020,
            "color": "Preto",
            "price": 82000
        },
        {
            "model": "Focus",
            "brand": "Ford",
            "year": 2018,
            "color": "Cinza",
            "price": 65000
        },
        {
            "model": "Accord",
            "brand": "Honda",
            "year": 2022,
            "color": "Dourado",
            "price": 78000
        },
        {
            "model": "CX-5",
            "brand": "Mazda",
            "year": 2021,
            "color": "Verde",
            "price": 82000
        },
        {
            "model": "Sentra",
            "brand": "Nissan",
            "year": 2019,
            "color": "Prata",
            "price": 70000
        },
        {
            "model": "Fusion",
            "brand": "Ford",
            "year": 2020,
            "color": "Branco",
            "price": 76000
        },
        {
            "model": "Civic",
            "brand": "Honda",
            "year": 2019,
            "color": "Vermelho",
            "price": 72000
        },
        {
            "model": "Corolla",
            "brand": "Toyota",
            "year": 2022,
            "color": "Azul",
            "price": 82000
        },
        {
            "model": "Golf",
            "brand": "Volkswagen",
            "year": 2017,
            "color": "Preto",
            "price": 60000
        },
        {
            "model": "Mazda3",
            "brand": "Mazda",
            "year": 2020,
            "color": "Cinza",
            "price": 78000
        },
        {
            "model": "Camry",
            "brand": "Toyota",
            "year": 2021,
            "color": "Dourado",
            "price": 83000
        },
        {
            "model": "Focus",
            "brand": "Ford",
            "year": 2019,
            "color": "Prata",
            "price": 67000
        },
        {
            "model": "Accord",
            "brand": "Honda",
            "year": 2020,
            "color": "Verde",
            "price": 79000
        },
        {
            "model": "CX-5",
            "brand": "Mazda",
            "year": 2018,
            "color": "Branco",
            "price": 72000
        },
        {
            "model": "Sentra",
            "brand": "Nissan",
            "year": 2022,
            "color": "Preto",
            "price": 78000
        },
        {
            "model": "Fusion",
            "brand": "Ford",
            "year": 2019,
            "color": "Azul",
            "price": 74000
        }
    ]

    data.forEach(car => createCar(car));
}
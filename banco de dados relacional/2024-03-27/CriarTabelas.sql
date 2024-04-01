-- Tabelas Localização
CREATE TABLE `estado` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL
);

CREATE TABLE `cidade` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `uf` CHAR(4) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `estado_id` INT NOT NULL,

    FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`)
);

-- Tabela Produtos/Serviços
CREATE TABLE `produto` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL,
    `valor` DECIMAL(10,2) NOT NULL
);

CREATE TABLE `servico` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL UNIQUE,
    `valor` DECIMAL(10,2) NOT NULL
);

-- Tabela Acessos
CREATE TABLE `acesso` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `login` VARCHAR(10) NOT NULL
);

-- Tabela cliente
CREATE TABLE `cliente` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(100) NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `logradouro` VARCHAR(255) NOT NULL,
    `cidade_id` INT NOT NULL,

    FOREIGN KEY (`cidade_id`) REFERENCES `cidade` (`id`)
);

-- Tabela Veículo
CREATE TABLE `veiculo` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `modelo` VARCHAR(100) NOT NULL,
    `ano` DATE NOT NULL,
    `placa` VARCHAR(10) NOT NULL UNIQUE,
    `cliente_id` INT NOT NULL,

    FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`)
);

-- Tabela Forma Pagamento
CREATE TABLE `forma_pagamento` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(50) NOT NULL UNIQUE
);

-- Tabela Vendas
CREATE TABLE `vendas` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `forma_pagamento_id` INT NOT NULL,
    `cliente_id` INT NOT NULL,
    `data_venda` DATE NOT NULL,
    `valor_total` DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (`forma_pagamento_id`) REFERENCES `forma_pagamento` (`id`),
    FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`)
);

-- Tabela Acompanhamento
CREATE TABLE `acompanhamento` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `status` CHAR(1) NOT NULL,
    `vendas_id` INT NOT NULL,

    FOREIGN KEY (`vendas_id`) REFERENCES `vendas` (`id`)
);

-- Tabela itens-vendas
CREATE TABLE `itens_vendas` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `produto_id` INT NOT NULL,
    `servico_id` INT NOT NULL,
    `vendas_id` INT NOT NULL,

    FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`),
    FOREIGN KEY (`servico_id`) REFERENCES `servico` (`id`),
    FOREIGN KEY (`vendas_id`) REFERENCES `vendas` (`id`)
);

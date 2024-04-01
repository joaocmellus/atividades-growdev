-- Utilizando UNIQUE
create table formaPagamento (
    idFormaPagamento int auto_increment primary key,
    nomeFormaPag varchar(45) unique
) ENGINE = InnoDB;


create table estado (
    idEstado int auto_increment primary key,
    nome varchar(255)
) ENGINE = InnoDB;
-- adicionar: uf varchar(2)

create table cidade (
    idCidade int auto_increment primary key,
    nome varchar(255),
    uf varchar(4),
    estado_idEstado int,
    foreign key (estado_idEstado) references estado(idEstado)
) ENGINE = InnoDB;
-- remover: uf

create table cliente (
    idCliente int auto_increment primary key,
    nome varchar(11) not null,
    dtNasc date,
    logradouro varchar(255),
    cidade_idCidade int,
    foreign key (cidade_idCidade) references cidade(idCidade)
)ENGINE = InnoDB;

create table veiculo (
    idVeiculo int auto_increment primary key,
    modeloVeiculo varchar(255),
    anoVeiculo date,
    placa char(10) unique,
    cliente_idCliente int,
    foreign key (cliente_idCliente) references cliente(idCliente)
)ENGINE = InnoDB;

create table vendas (
    idVendas int auto_increment primary key,
    pagamento_idFormaPagamento int,
    cliente_idCliente int,
    dataVenda date,
    valorTotal decimal(10,2),
    foreign key (pagamento_idFormaPagamento) references formaPagamento(idFormaPagamento),
    foreign key (cliente_idCliente) references cliente(idCliente)
) ENGINE = InnoDB;

create table produto (
    idProduto int auto_increment primary key,
    nomeProduto varchar(255),
    valorProduto decimal(10,2)
) ENGINE = InnoDB;

create table servico (
    idServico int auto_increment primary key,
    nomeServico varchar(50),
    valorServico decimal(10,2)
) ENGINE = InnoDB;

create table itensVendas (
    idItensVendas int auto_increment primary key,
    produto_idProduto int,
    servico_idServico int,
    vendas_idVendas int,
    foreign key (produto_idProduto) references produto(idProduto),
    foreign key (servico_idServico) references servico(idServico),
    foreign key (vendas_idVendas) references vendas(idVendas)
) ENGINE = InnoDB;

create table acompanhamento (
    idAcompanhamento int auto_increment primary key,
    status char(1),
    vendas_idVendas int,
    foreign key (vendas_idVendas) references vendas(idVendas)
) ENGINE = InnoDB;

-- Utilizando CONSTRAINT UNIQUE
create table acesso (
    idAcesso int auto_increment primary key,
    login varchar(10),
    constraint UC_login unique(login)
) ENGINE = InnoDB;

-- Alteração 01
alter table estado
add column uf varchar(2);

-- Alteração 02
alter table cidade 
drop column uf;

-- Alteração 03
alter table vendas 
modify column pagamento_idFormaPagamento int not null,
modify column cliente_idCliente int not null,
modify column dataVenda date not null,
modify column valorTotal decimal(10, 2) not null;

-- Inserindo dados (FormaPagamento)
insert into formaPagamento(nomeFormaPag)
values ('Bitcoin'), ('Dinheiro'), ('Cartão de Crédito');

-- Inserindo Cliente
alter table cliente
modify column nome varchar(255);

INSERT INTO estado
(idEstado, nome, uf)
VALUES(1, 'Rio Grande Do Sul', 'RS');

INSERT INTO cidade
(idCidade, nome, estado_idEstado)
VALUES(1, 'Novo Hamburgo', 1);

INSERT INTO cliente
(idCliente, nome, dtNasc, logradouro, cidade_idCidade)
VALUES(1, 'Marcelo Eltz', '1988-01-01', 'Rua 1', 1);
INSERT INTO cliente
(idCliente, nome, dtNasc, logradouro, cidade_idCidade)
VALUES(2, 'Pedro Silva', '2000-01-01', 'Rua 2', 1);
INSERT INTO cliente
(idCliente, nome, dtNasc, logradouro, cidade_idCidade)
VALUES(3, 'Maria', '2005-01-01', 'Rua 3', 1);
INSERT INTO cliente
(idCliente, nome, dtNasc, logradouro, cidade_idCidade)
VALUES(4, 'João Silva', '1988-01-01', 'Rua 4', 1);

INSERT INTO veiculo
(idVeiculo, modeloVeiculo, anoVeiculo, placa, cliente_idCliente)
VALUES(1, 'Onyx Ltz', '2016-01-01', 'IHG8JI9', 1);
INSERT INTO veiculo
(idVeiculo, modeloVeiculo, anoVeiculo, placa, cliente_idCliente)
VALUES(2, 'Sportage', '2012-01-01', 'VHG8JI9', 2);
INSERT INTO veiculo
(idVeiculo, modeloVeiculo, anoVeiculo, placa, cliente_idCliente)
VALUES(3, 'Logan', '2018-01-01', 'fHG8JI9', 3);

INSERT INTO servico
(idServico, nomeServico, valorServico)
VALUES(1, 'Polimento', 500.00);
INSERT INTO servico
(idServico, nomeServico, valorServico)
VALUES(2, 'Troca de Oleo', 200.00);

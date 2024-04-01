-- 1. Verficicar quantos clientes tem na plataforma.
SELECT 
    COUNT(c.idCliente) AS qtdClientes 
FROM 
    `cliente` c;


-- 2. Verficicar quantos clientes não tem carros.
SELECT
    COUNT(c.idCliente) AS qtd_clientes_sem_carro
FROM
    `cliente` c
LEFT JOIN
    `veiculo` v ON v.cliente_idCliente = c.idCliente
WHERE
    v.idVeiculo IS NULL;


-- 3. Criar serviço de polimento para Marcelo, que pagou no cartão
INSERT INTO `vendas` (pagamento_idFormaPagamento, cliente_idCliente, dataVenda, valorTotal)
SELECT 
    fp.idFormaPagamento,
    c.idCliente,
    CURRENT_DATE(),
    s.valorServico
FROM 
    `formaPagamento` fp,
    `cliente` c,
    `servico` s
WHERE 
    nomeFormaPag = 'Cartão de Crédito' AND
    nome = 'Marcelo Eltz' AND
    nomeServico = 'Polimento';

INSERT INTO itensVendas (servico_idServico, vendas_idVendas)
SELECT 
    s.idServico, v.idVendas
FROM 
    `servico` s,
    `vendas` v
ORDER BY v.idVendas DESC
LIMIT 1;


-- 4. Criar serviço de troca de óleo para Maria, que pagou no dinheiro
INSERT INTO `vendas` (pagamento_idFormaPagamento, cliente_idCliente, dataVenda, valorTotal)
SELECT 
    fp.idFormaPagamento,
    c.idCliente,
    CURRENT_DATE(),
    s.valorServico
FROM 
    `cliente` c,
    `formaPagamento` fp,
    `servico` s
WHERE 
    c.nome = 'Maria' AND
    fp.nomeFormaPag = 'Dinheiro' AND
    s.nomeServico = 'Troca de Oleo';

INSERT INTO itensVendas (servico_idServico, vendas_idVendas)
SELECT 
    s.idServico, v.idVendas
FROM 
    `servico` s,
    `vendas` v
ORDER BY v.idVendas DESC
LIMIT 1;


-- 5. Criar venda de um carro para João 
-- Honda Civic, 2020, FGH89DF, 120.000,00
-- Pago em Bitcoin

INSERT INTO `produto` (nomeProduto, valorProduto)
VALUES ('Honda Civic', 120000.00);

INSERT INTO `vendas` (pagamento_idFormaPagamento, cliente_idCliente, dataVenda, valorTotal)
SELECT 
    fp.idFormaPagamento,
    c.idCliente,
    CURRENT_DATE(),
    p.valorProduto
FROM 
    `cliente` c,
    `formaPagamento` fp,
    `produto` p
WHERE 
    c.nome = 'João Silva' AND
    fp.nomeFormaPag = 'Bitcoin' AND
    p.nomeProduto = 'Honda Civic';

INSERT INTO itensVendas (produto_idProduto, vendas_idVendas)
SELECT 
    p.idProduto, v.idVendas
FROM 
    `produto` p,
    `vendas` v
ORDER BY v.idVendas DESC
LIMIT 1;

INSERT INTO `veiculo` (modeloVeiculo, anoVeiculo, placa)
VALUES (
    'Honda Civic',
    '2020-01-01',
    'FGH89DF',
    (SELECT idCliente FROM cliente WHERE nome = 'João Silva')
);


-- 6. Criar serviço de polimento para joao
INSERT INTO `vendas` (pagamento_idFormaPagamento, cliente_idCliente, dataVenda, valorTotal)
SELECT 
    fp.idFormaPagamento,
    c.idCliente,
    CURRENT_DATE(),
    s.valorServico
FROM 
    `formaPagamento` fp,
    `cliente` c,
    `servico` s
WHERE 
    nomeFormaPag = 'Dinheiro' AND
    nome = 'João Silva' AND
    nomeServico = 'Polimento';

INSERT INTO itensVendas (servico_idServico, vendas_idVendas)
SELECT 
    s.idServico, v.idVendas
FROM 
    `servico` s,
    `vendas` v
ORDER BY v.idVendas DESC
LIMIT 1;

-- 7. Criar serviço de troca de oleo para joao
INSERT INTO `vendas` (pagamento_idFormaPagamento, cliente_idCliente, dataVenda, valorTotal)
SELECT 
    fp.idFormaPagamento,
    c.idCliente,
    CURRENT_DATE(),
    s.valorServico
FROM 
    `formaPagamento` fp,
    `cliente` c,
    `servico` s
WHERE 
    nomeFormaPag = 'Dinheiro' AND
    nome = 'João Silva' AND
    nomeServico = 'Troca de Oleo';

INSERT INTO itensVendas (servico_idServico, vendas_idVendas)
SELECT 
    s.idServico, v.idVendas
FROM 
    `servico` s,
    `vendas` v
ORDER BY v.idVendas DESC
LIMIT 1;

-- 8. Listar vendas
-- idVenda, Nome do cliente, data, item, se é servico ou produto, total

SELECT
    v.idVendas, 
    c.nome, 
    v.dataVenda,
 	CASE
        WHEN s.nomeServico IS NOT NULL THEN s.nomeServico
        ELSE p.nomeProduto
    END AS item,
    CASE
        WHEN s.idServico IS NOT NULL THEN 'Serviço'
        ELSE 'Produto'
    END AS tipo,
    v.valorTotal
FROM
	vendas v
LEFT JOIN
    cliente c ON c.idCliente = v.cliente_idCliente
LEFT JOIN
    itensVendas iv ON iv.vendas_idVendas = v.idVendas
LEFT JOIN
    produto p ON p.idProduto = iv.produto_idProduto
LEFT JOIN
    servico s ON s.idServico = iv.servico_idServico;

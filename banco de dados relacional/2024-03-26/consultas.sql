-- 1 - Todos os clientes do estado de MG
SELECT c.*
FROM `customer` c
INNER JOIN `customer_address` a ON a.customer_id = c.id
WHERE a.state = 'MG';

-- 2 - Todos os clientes do sexo masculino que moram na cidade de São Paulo (capital)
SELECT *
FROM `customer` c
INNER JOIN `customer_address` a ON a.customer_id = c.id
WHERE c.gender = 'male' AND a.city = 'São Paulo';

-- 3 - Todas as compras acima de R$3.000,00 em ordem crescente;
SELECT *
FROM `orders`
WHERE total > 3000
ORDER BY total ASC;

-- 4 - Todos os produtos que tenham em seu nome “Sapatilha em Couro Vazada”
SELECT *
FROM `items`
WHERE name LIKE '%Sapatilha em Couro Vazada%';
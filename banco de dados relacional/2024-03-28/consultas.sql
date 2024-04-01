-- 1 - Todos os clientes do estado de MG que tenham comprado o produto
-- que contenha em seu nome “Sapatilha em Couro Vazada”

SELECT c.*, i.name
FROM `customer` c
INNER JOIN `customer_address` a ON a.customer_id = c.id
INNER JOIN `orders` o ON o.customer_id = c.id
INNER JOIN `items` i ON i.id = o.id
WHERE a.state = 'MG' AND i.name LIKE '%Sapatilha em Couro Vazado%';


-- 2 - Todos os nomes e telefones dos clientes do estado de SP que efetuaram 
-- compras cuja faixa de valor esteja acima de R$8.000

SELECT c.name, c.phone
FROM `customer` c
INNER JOIN `customer_address` a ON a.customer_id = c.id
INNER JOIN `orders` o ON o.customer_id = c.id
WHERE a.state = 'SP'
GROUP BY c.name, c.phone
HAVING SUM(o.total) >= 8000;


-- 3 - O nome do cliente que teve o maior desconto em sua compra 
-- e o valor do desconto obtido

SELECT c.name, o.discount
FROM `customer` c
INNER JOIN `customer_address` a ON a.customer_id = c.id
INNER JOIN `orders` o ON o.customer_id = c.id
ORDER BY o.discount DESC
LIMIT 1;
-- Listar todas as depesas do usuario
SELECT Despesa.*
FROM despesa
JOIN cartaocredito ON despesa.id_cartao = cartaocredito.id_cartao
JOIN usuario ON cartaocredito.id_usuario = usuario.id_usuario
WHERE usuario.id_usuario = 1; -- Coloque o ID do usuario desejado

--Calcular o total de despesas por categtoria 
SELECT Categoria.nome, SUM(despesa.valor) AS total
FROM despesa
JOIN categoria ON despesa.id_categoria = categoria.id_categoria
GROUP BY Categoria.nome;

-- Listar todos os cartoes de credito de um usuario 
SELECT cartaocredito.* 
FROM cartaocredito
WHERE cartaocredito.id_usuario = 1; -- Coloque o ID do usuario desejado
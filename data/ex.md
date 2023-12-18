
### Criando tabelas

```sql
-- Tabela Usuario
CREATE TABLE
    Usuario (
        id_usuario SERIAL PRIMARY KEY,
        nome VARCHAR(50),
        email VARCHAR(50) UNIQUE,
        senha VARCHAR(255)
    );

-- Tabela Cartao Credito
CREATE TABLE
    CartaoCredito (
        id_cartao SERIAL PRIMARY KEY,
        numero VARCHAR(16),
        dataValidade DATE,
        limiteCredito DECIMAL(10, 2),
        id_usuario int,
        FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
    );

--Tabela Despesa
CREATE TABLE
    Despesa(
        id_despesa SERIAL PRIMARY KEY,
        valor DECIMAL(10, 2),
        date DATE,
        id_cartao INT,
        id_categoria INT,
        FOREIGN KEY (id_cartao) REFERENCES CartaoCredito(id_cartao),
        FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
    );

-- Tabela categoria
CREATE TABLE
    Categoria (
        id_categoria SERIAL PRIMARY KEY,
        nome VARCHAR(50)
    );
```

### Inserindo dados

```sql
INSERT INTO
    Usuario (nome, email, senha)
VALUES (
        'Jo Mendes',
        'Jo@gmail.com',
        '122223'
    ), (
        'Joana Duque',
        'joana@gmail.com',
        '123234'
    ), (
        'Rodrigo Guedes',
        'rodrigo@gmail.com',
        '123321'
    ), (
        'Fabio Brasileiro',
        'fabio@gmail.com',
        '123421f3'
    ), (
        'Roberta Silva',
        'roberta@gmail.com',
        '123234'
    ), (
        'Joyce Maria',
        'joyce@gmail.com',
        '12233'
    );

INSERT INTO
    CartaoCredito (
        numero,
        datavalidade,
        limitecredito,
        id_usuario
    )
VALUES (
        '12345678',
        '2023-12-31',
        5000.00,
        1
    ), (
        '12320678',
        '2024-12-10',
        10000.00,
        2
    ), (
        '12344678',
        '2024-01-05',
        3500.00,
        3
    ), (
        '12339678',
        '2024-05-02',
        1000.00,
        4
    ), (
        '19245678',
        '2024-10-01',
        850.00,
        5
    ), (
        '12321878',
        '2024-04-30',
        5055.00,
        6
    );

INSERT INTO categoria (nome)
VALUES ('Alimentacao'), ('Entretenimento'), ('Transporte'), ('Saúde'), ('Academia');

INSERT INTO
    despesa (
        valor,
        date,
        id_cartao,
        id_categoria
    )
VALUES (80.00, '2023-12-05', 3, 1),
(25.00, '2023-12-10', 4, 2), 
(150.00, '2023-12-01', 1, 1),
(30.00, '2023-12-02', 2, 3),
(150.00, '2023-12-01', 1, 1),
(30.00, '2023-12-02', 2, 4);
```
### Fazendo o select com joins

```sql
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
```
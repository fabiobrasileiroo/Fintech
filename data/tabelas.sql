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
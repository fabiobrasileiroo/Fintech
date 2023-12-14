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
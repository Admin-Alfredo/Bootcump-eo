/* Lógico: */

CREATE TABLE candidato (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(150),
    genero ENUM("M", "F"),
    data_nascimento DATE,
    bi VARCHAR(45) UNIQUE,
    data_emisao_bi DATE,
    data_expiracao_bi DATE,
    URL_bi TEXT,
    media_medio FLOAT(2,2),
    curso_medio VARCHAR(150),
    escola_medio VARCHAR(150),
    ano_termino_medio INTEGER,
    URL_certificado TEXT
);

CREATE TABLE curso (
    id INTEGER PRIMARY KEY,
    descricao TEXT UNIQUE,
    anos INTEGER,
    total_cadeira INTEGER,
    quantidade_vagas INTEGER
);

CREATE TABLE candidata (
    candidato_id INTEGER NOT NULL,
    curso_id INTEGER NOT NULL,
    id INTEGER PRIMARY KEY,
    data DATE,
    ano_letivo INTEGER,
    estado INTEGER,
    nota INTEGER
);
 
ALTER TABLE candidata ADD CONSTRAINT FK_candidata_2
    FOREIGN KEY (candidato_id)
    REFERENCES candidato (id)
    ON DELETE SET NULL;
 
ALTER TABLE candidata ADD CONSTRAINT FK_candidata_3
    FOREIGN KEY (curso_id)
    REFERENCES curso (id)
    ON DELETE SET NULL;
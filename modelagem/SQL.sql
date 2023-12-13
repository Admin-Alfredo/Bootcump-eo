/* Lógico: */

CREATE TABLE candidato (
    id INT PRIMARY KEY,
    nome VARCHAR(150),
    genero ENUM("M", "F") DEFAULT "M",
    data_nascimento DATE,
    bi VARCHAR(45) UNIQUE,
    data_emisao_bi DATE,
    data_expiracao_bi DATE,
    URL_bi TEXT,
    media_medio FLOAT(2,2),
    curso_medio VARCHAR(150),
    escola_medio VARCHAR(150),
    ano_termino_medio INT,
    URL_certificado TEXT
);

CREATE TABLE curso (
    id INT PRIMARY KEY,
    descricao TEXT UNIQUE,
    anos INT,
    total_cadeira INT,
    quantidade_vagas INT
);

CREATE TABLE candidata (
    candidato_id INT NOT NULL,
    curso_id INT NOT NULL,
    id INT PRIMARY KEY,
    data DATE,
    ano_letivo INT,
    estado INT,
    nota INT
);
 
ALTER TABLE candidata ADD CONSTRAINT FK_candidata_2
    FOREIGN KEY (candidato_id)
    REFERENCES candidato (id)
    ON DELETE SET NULL;
 
ALTER TABLE candidata ADD CONSTRAINT FK_candidata_3
    FOREIGN KEY (curso_id)
    REFERENCES curso (id)
    ON DELETE SET NULL;
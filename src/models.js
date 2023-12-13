const { Connection } = require('mysql2/promise')
module.exports = async (app, connection) => {

  const candidato = connection.query(`
    CREATE TABLE if not exists candidato (
      id INT PRIMARY KEY,
      nome VARCHAR(150),
      genero ENUM("M", "F"),
      data_nascimento DATE,
      bi VARCHAR(45) UNIQUE NOT NULL,
      data_emisao_bi DATE,
      data_expiracao_bi DATE,
      URL_bi TEXT,
      media_medio FLOAT(2,2),
      curso_medio VARCHAR(150),
      escola_medio VARCHAR(150),
      ano_termino_medio INT,
      URL_certificado TEXT
    );
  `)
  const curso = connection.query(`
    CREATE TABLE if not exists curso (
      id INT PRIMARY KEY,
      descricao TEXT UNIQUE,
      anos INT,
      total_cadeira INT,
      quantidade_vagas INT
    );
  `)
  const candidata = connection.query(`
    CREATE TABLE if not exists candidata (
      id INT PRIMARY KEY,
      data DATE,
      ano_letivo INT,
      estado INT,
      nota INT,
      curso_id INT NOT NULL ,
      candidato_id INT NOT NULL,
      FOREIGN KEY (curso_id) REFERENCES curso(id),
      FOREIGN KEY (candidato_id) REFERENCES candidato(id)
    );
  `)


  Promise.all([candidato, candidata, curso])
    .then((res) => console.log(`+ TABELAS CRIADAS COM SUCESSO!`))
    .catch(err => console.log(`Erro: ${err.message}`))

}
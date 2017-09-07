drop table tb_user if exists;
CREATE TABLE tb_user (
  id SERIAL NOT NULL,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL unique,
  endereco VARCHAR(120),
  cidade VARCHAR(120),
  estado VARCHAR(120),
  senha VARCHAR(80) NOT NULL,
  PRIMARY KEY (id));
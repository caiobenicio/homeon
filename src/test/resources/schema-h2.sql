drop table tb_user if exists;
drop table tb_permission if exists;
drop table tb_user_permission if exists;

CREATE TABLE tb_user(
  id INT(11) SERIAL NOT NULL,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(255) NOT NULL unique,
  endereco VARCHAR(120),
  cidade VARCHAR(120),
  estado VARCHAR(120),
  senha VARCHAR(80) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE tb_permission(
  id INT(11) SERIAL NOT NULL,
  role VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));


CREATE TABLE tb_user_permission (
  permission_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (permission_id, user_id),
  CONSTRAINT `fk_tb_permission_has_tb_user_tb_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `mutrack_simple`.`tb_permission` (`pk_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_permission_has_tb_user_tb_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mutrack_simple`.`tb_user` (`pk_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
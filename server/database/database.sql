CREATE DATABASE contenidos_db;

USE contenidos_db;

CREATE TABLE contenidos(
 
    descripcion VARCHAR(180),
    link VARCHAR(255),
    materia VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idcontenido INT NOT NULL,
    codigomateria INT NOT NULL ,
         PRIMARY KEY (idcontenido)

);





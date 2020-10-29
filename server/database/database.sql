CREATE DATABASE contenidos_db;


TABLA CONTENIDOS

CREATE TABLE contenidos(
 
    descripcion VARCHAR(180),
    link VARCHAR(255),
    materia VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    idcontenido INT NOT NULL AUTO_INCREMENT,
    codigomateria INT NOT NULL ,
         PRIMARY KEY (idcontenido)

);

CREATE TABLE profesor(
idprofesor INT NOT NULL AUTO_INCREMENT,
mail VARCHAR(255),
nombre VARCHAR(255),
apellido VARCHAR(255),
dni INT,

PRIMARY KEY(idprofesor)
);







CREATE TABLE anio(
idanio INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(255),
PRIMARY KEY(idanio)
);


CREATE TABLE  administrador(
idadministrador INT NOT NULL AUTO_INCREMENT,
mail VARCHAR(255),
nombre VARCHAR(255),
apellido VARCHAR(255),
PRIMARY KEY(idadministrador)
);
CREATE TABLE alumno(
idalumno INT NOT NULL AUTO_INCREMENT,
idanio INT NOT NULL,
nombre VARCHAR(255),
apellido VARCHAR(255), 
mail VARCHAR(255),
dni INT,
PRIMARY KEY(idalumno),
FOREIGN KEY (idanio) REFERENCES anio(idanio)
);

CREATE TABLE materia(
idmateria INT NOT NULL AUTO_INCREMENT,
idanio INT NOT NULL,
idprofesor INT NOT NULL,
nombre VARCHAR(255),
PRIMARY KEY(idmateria),
FOREIGN KEY (idanio) REFERENCES anio(idanio),
FOREIGN KEY (idprofesor) REFERENCES profesor(idprofesor)
);




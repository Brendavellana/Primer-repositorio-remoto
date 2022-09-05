-- SHOW DATABASES; 
/*
Bloque de comentarios
*/ 
CREATE  DATABASE tienda;

USE tienda;

DROP DATABASE tienda;

CREATE TABLE clientes (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR (50) NOT NULL,
apellido CHAR (50) NOT NULL,
telefono CHAR (50) NOT NULL,
direccion VARCHAR (150) NOT NULL,
);


INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro','Paramo', '5540820993', 'Comala');

SELECT * FROM clientes; 
-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE redDead;

USE redDead;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	usuario VARCHAR(15),
	email VARCHAR(50),
	senha VARCHAR(15),
	CONSTRAINT dadosUnicos UNIQUE (usuario, email)
);







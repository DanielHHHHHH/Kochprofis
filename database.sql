DROP DATABASE IF EXISTS kochprofis;

CREATE DATABASE kochprofis;

USE kochprofis;

CREATE TABLE rezepte (
  id int(3) NOT NULL AUTO_INCREMENT,
  name varchar(255),
  rezepttext text,
  autor varchar(255),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE benutzer (
    id int(3) NOT NULL AUTO_INCREMENT,
    benutzername varchar(255) NOT NULL,
    passwort varchar(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
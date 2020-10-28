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

INSERT INTO rezepte (name, rezepttext, autor)
VALUES ("Kürbiskuchen","4 Eier, 400g Zucker, 200ml Öl verrühren. Nach und nach das mit dem Backpulver (1 Pack) vermischte und gesiebte Mehl (400g) sowie die gem. Mandeln (150g) einrühren. Das geraspelte Kürbisfleisch (400g) vorsichtig unterheben!
In einer großen Kastenform bei 160 Grad ca. 75 Minuten backen.
In der Form etwas abkühlen lassen und gaaaanz vorsichtig auf ein Kuchengitter stürzen.
Dann nach Belieben mit Schokoguss überziehen und evtl. mit Mandelstückchen bestreuen.
Mandeln und Kürbis können auch durch Nüsse und Zucchini ersetzt werden.
Der Kuchen ist sehr lecker und saftig.", "Tom Kürbis");
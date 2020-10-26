require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Connection zur Datenbank aufbauen
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kochprofis'
});

connection.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("MySQL connected...")

  }
});

app.use(express.static("public"));
app.use(express.json());

app.listen(2222, () => {
  console.log("Server started on Port 2222")
});

//Methode zur Login-Validierung
app.post('/login', urlencodedParser, (req, res) => {
  let benutzername = req.body.username;
  let passwort = req.body.password;

  if (benutzername && passwort) {
    connection.query('SELECT * FROM benutzer WHERE benutzername = ? AND passwort = ?', [benutzername, passwort], function (error, results, fields) {
      if (results.length != 0) {
        res.status(200).send()
      } else {
        console.log("nichts gefunden")
        res.status(401).send()
      }
    });
  } else {
    console.log("nichts übergeben")
    res.status(401).send()
  }
});

//Methode zur Registrierung ... DB-INSERT
app.post('/register', urlencodedParser, (req, res) => {

  //Abfrage ob Passwörter übereinstimmen und alle Felder ausgefüllt sind
  if (req.body.password == req.body.passwordVerify && req.body.username != '' && req.body.password != '' && req.body.passwordVerify != '') {

    let post = {
      benutzername: req.body.username,
      passwort: req.body.password,
    }

    console.log(req.body);

    connection.query('INSERT INTO benutzer SET ?', post, (err, res) => {
      if (err) throw err;
    });
    res.status(200).send(); 
  } 
  else {
    res.status(401).send();
  }
});

//Rezept hinzufügen
app.post('/erstellen', urlencodedParser, (req, res) => {

  // Abfrage, damit kein Feld leer ist
  if (req.body.text != "" && req.body.autor != "" && req.body.titel != "") {
    let post =
    {
      rezepttext: req.body.text,
      autor: req.body.autor,
      name: req.body.titel, 
    }

    connection.query('INSERT INTO rezepte SET ?', post, (err, result) => {
      if (err) throw err;
      if (result.affectedRows == 1) {
        res.status(200).send();
      } else {
        res.status(400).send();
      }
    });
  } else {
    res.status(400).send();
  }
});


//Rezept löschen
app.delete("/delete", (req, res) => {

  let id = req.body.auswahl;
  var row;

  if (id) {
    connection.query('DELETE FROM rezepte WHERE id=?', [id], function (error, rows) {
      row = rows.affectedRows;
      if (row == 1) {
        console.log("1 row affected");
        res.status(200).send();
      } else {
        console.log("keine row affected");
        res.status(404).send();
      }
    });
  } else {
    console.log("Keine ID");
    res.status(404).send();
  }
});

//Rezept suchen
app.get('/search', async (req, res) => {

  const rows = connection.query('SELECT * FROM rezepte', (err, rows, fields) => {
    res.json(rows);
  });

});


//Rezept updaten
app.post('/update', urlencodedParser, (req, res) => {

  console.log(req.body);

  if (req.body) {

    let name = req.body.titel;
    let rezepttext = req.body.text;
    let autor = req.body.autor;
    let id = req.body.auswahl;

    connection.query('UPDATE rezepte SET name = ?, rezepttext = ?, autor = ? WHERE id = ?', [name, rezepttext, autor, id], (err, result) => {
      if (err) throw err;

      if (result.affectedRows == 1) {
        console.log("1 row affected");
        res.status(200).send();
      } 
      else if (result.affectedRows == 0) {
        console.log("kein row affected");
        res.status(404).send();
      } 
      else {
        console.log("mehr als eine row affected"); // kann eigentlich nicht passieren, da ID unique ist
      }
    })
  }
});

//Rezepte laden und in der Tabelle anzeigen
app.post('/uebersicht', urlencodedParser, (req, res) => {

  connection.query('SELECT * FROM rezepte', (err, result, fields) => {
    if (err) {
      res.status(401).send()
    }
    else {
      res.status(200).send()
      //Datensätze aus der Datenbank in die JSON-Datei table.json schreiben
      fs.writeFile('public/table.json', JSON.stringify(result), function (err) {
        if (err) { throw err; }
      });
    }
  });
});
require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require('body-parser');
//const alert = require('alert');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

  if (req.body.password == req.body.passwordVerify && req.body.username != '' && req.body.password != '' && req.body.passwordVerify != '') {

    let post = {
      benutzername: req.body.username,
      passwort: req.body.password,
    }

    console.log(req.body); //evtl JSON Datenmodell... für readme

    connection.query('INSERT INTO benutzer SET ?', post, (err, res) => {
      if (err) throw err;
      //console.log('success');
      //console.log(res);
    });
    res.status(200).send(); //Das ist voll wichtig... ohne des funktioniert das fetch Teil nicht
  }

  else {
    res.status(401).send();
  }

});


//-------------------------------------------------------------------------------------------------------
//Umsetzung für Forum-Seite.html
//Anleitung von Github

//Rezept hinzufügen
app.post('/erstellen', urlencodedParser, (req, res) => {

  console.log(req.body);

  res.status(200).send();

  let post =
  {
    rezepttext: req.body.text, // spaltenname:req.body.name(HTML)
    autor: req.body.autor,
    name: req.body.titel,
  }

  console.log(req.body);

  connection.query('INSERT INTO rezepte SET ?', post, (err, res) => {
    if (err) throw err;
    console.log("Daten übergeben");
    console.log(res);
  });
});

/*
//Rezepte in Tabelle ausgeben
app.get("/laden", urlencodedParser, (req, res) => {
  console.log("TEST");

  console.log(req.query.auswahl);

  res.status(200).send();

  if (req.query.auswahl) {
    const [rows] = await connection.execute("SELECT * FROM rezepte", [req.query.auswahl]);
  }
  else {
    const [rows] = await connection.execute("SELECT * FROM rezepte");
  }
});
*/


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
        console.log("kein row affected");
        res.status(404).send();
      }
    });
  } else {
    console.log("Keine ID");
    res.status(404).send();
  }

});

app.get('/search', async (req, res) => {

  const [rows] = connection.query('SELECT * FROM rezepte', (err, rows, fields) => {
    console.log(rows);
    res.json(rows);


  });

});

//Rezept updaten

app.post('/update', urlencodedParser, (req, res) => {

  console.log(req.body.auswahl);

  let post =
  {
    rezepttext: req.body.text,
    autor: req.body.autor,
    name: req.body.titel,

  }

  console.log(req.body);

  //connection.query('INSERT INTO rezepte SET ?', post, (err, res) => {
  //if (err) throw err;

  // });
});





/*
//Ein Rezept Löschen
app.delete('/rezepte/:id', async (req, res) => {
  console.log(req.params.id);

  const [rows] = await connection.execute('DELETE FROM rezepte WHERE id = ?', [req.params.id],);

  if (rows.affectedRows == 1) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});


//Alle Rezepte bekommen
app.get('/rezepte', async (req, res) => {
  const [rows] = await connection.execute('SELECT rezept FROM rezepte', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});*/

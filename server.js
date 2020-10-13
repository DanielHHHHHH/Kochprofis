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


app.post('/login', urlencodedParser, (req, res) => {
  let benutzername = req.body.username;
  let passwort = req.body.password;

  if (benutzername && passwort) {
    connection.query('SELECT * FROM benutzer WHERE benutzername = ? AND passwort = ?', [benutzername, passwort], function (error, results, fields) {
      if (results.length != 0) {
        res.status(200).send()
      } else {
        res.status(401).send()
      }
    });
  } else {
    res.status(401).send()
  }
});


app.post('/register', urlencodedParser, (req, res) => {
  console.log(req.body);
  if (req.body.password == req.body.passwordVerify && req.body.username != '' && req.body.password != '' && req.body.passwordVerify != '') {

    let post = {
      benutzername: req.body.username,
      passwort: req.body.password,
    }

    console.log(req.body);

    connection.query('INSERT INTO benutzer SET ?', post, (err, res) => {
      if (err) throw err;
      console.log('success');
      console.log(res);
    });
  }

  else {
    res.status(401).send();
  }

});


//-------------------------------------------------------------------------------------------------------
//Alles für die Forum-Seite, da sich bei mir das "forumserver.js" nicht mit der DB verbunden hat
//Anleitung von Github

//Ein Rezept hinzufügen
app.post('/', async (req, res) => {
  console.log(req.body);
  
  if(req.body.text =! '')
  {
    res.status(200).send();
    let post = 
    {
      rezept: req.body.text,
      autor: req.body.autor,
      titel: req.body.titel,
    }

    console.log(req.body);

    connection.query('INSERT INTO rezepte (rezept, autor, rezeptname?', post, (err, res) =>
    {
      if (err) throw err;
      console.log("Daten übergeben");
      console.log(res);
    });
  }

  else
  {
    res.status(401).send();
  }
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

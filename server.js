require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require('body-parser');
const alert = require('alert');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kochprofis'
  });

  connection.connect((error) =>{
    if(error){
    console.log(error)
    }else{
      console.log("MySQL connected...")
      /*
      connection.query("CREATE TABLE `benutzer` (`id` int(3) NOT NULL,`benutzername` varchar(30) NOT NULL,`passwort` varchar(30) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");
      connection.query("INSERT INTO `benutzer`(`id`, `benutzername`, `passwort`) VALUES (1,'test','123');");
      */
    }
  });

  
app.use(express.static("public"));



app.listen(2222, () => {
  console.log("Server started on Port 2222")
});


app.post('/login',urlencodedParser ,(req, res)=> {
  let benutzername=req.body.username;
  let passwort=req.body.password;

  if(benutzername && passwort){
    connection.query('SELECT * FROM benutzer WHERE benutzername = ? AND passwort = ?', [benutzername, passwort], function(error, results, fields) {
			if (results.length != 0) {
				res.sendFile(__dirname +'/public/Forum-Seite.html');
			} else {
				alert("Falser Benutzername und/oder Passwort");
			}
		});
	} else {
    alert("Bitte geben Sie einen Benutzernamen und/oder Passwort an");
	}
});


app.post('/register',urlencodedParser ,(req, res)=> {
  if(req.body.password==req.body.passwordVerify && req.body.username !='' && req.body.password !='' && req.body.passwordVerify!=''){

  let post={
    benutzername: req.body.username,
    passwort: req.body.password,
  }

  console.log(req.body);
  
  connection.query('INSERT INTO benutzer SET ?', post, (err,res)=>{
    if(err) throw err;
    console.log('success');
  console.log(res);
  });

  res.sendFile(__dirname +'/public/Forum-Seite.html');
}

else{
  alert("Bitte alle Felder richtig ausfüllen");
}

});

/*app.post("/benutzer", async (req, res) => {
  const [
    rows,
  ] = await connection.execute(
    "INSERT INTO benutzer (benutzername, passwort) VALUES (?, ?)",
    [req.body.benutzername, req.body.kennwort]
  );

  res.json({
    id: rows.insertId,
    benutzername: req.body.benutzername,
    kennwort: req.body.kennwort,
  });
});
*/

//-------------------------------------------------------------------------------------------------------
//Alles für die Forum-Seite, da sich bei mir das "forumserver.js" nicht mit der DB verbunden hat
//Anleitung von Github

//Alle Rezepte bekommen
app.get('/rezepte', async (req,res) => {
  const [rows] = await connection.execute('SELECT rezept FROM rezepte',(err, rows, fields)=>{
    if(!err)
      res.send(rows);
    else
      console.log(err);
  })
});

//Ein Rezept hinzufügen
app.post('/rezepte', async (req,res) => {
    const [rows] = await connection.execute('INSERT INTO rezepte (rezept, autor, rezeptname) VALUES (?,?,?)'
    [req.body.rezept, req.body.autor, req.body.rezeptname]
  );

  res.json({
    id: rows.insertId,
    rezept: req.body.rezept,
    autor: req.body.autor,
    rezeptname: req.body.rezeptname,
  });
});

//Ein Rezept Löschen
app.delete('/rezepte/:id', async (req,res)=>{
  console.log(req.params.id);

  const [rows] = await connection.execute('DELETE FROM rezepte WHERE id = ?',[req.params.id],);

  if(rows.affectedRows == 1) {
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

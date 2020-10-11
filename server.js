require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require('body-parser');
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

app.post('/register',urlencodedParser ,(req, res)=> {
  let post={
    
    benutzername: req.body.username,
    passwort: req.body.password,
    
  }
  console.log(req.body);
  connection.query('INSERT INTO login SET ?', post, (err,res)=>{
    if(err) throw err;
    console.log('success');
  console.log(res);
  });

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

//Wird eventuell nicht mehr gebraucht, weil die Verbindung nur mit einer server.js funktioniert
//Bin mir aber nicht sicher

require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());

let connection;

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kochprofis'
});

mysqlConnection.connection((err)=>{
  if(!err)
    {
      console.log("Connected");
    }
  else
    {
      console.log("Connection Failed");
    }
});

app.listen(2222);

app.use(express.static("public"));
app.use(express.json());

  
app.use(
    session({
      secret: "super secret",
      resave: false,
      saveUninitialized: true,
    })
);


app.get("/rezepte", async (req, res) => {
    console.log(req.query.author);

    if(req.query.author){
      const [rows] = await connection.execute("SELECT * FROM rezepte");
    }
    res.json(rows);
});
require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const session = require("express-session");
const app = express();


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
      connection.query("CREATE TABLE `benutzer` (`id` int(3) NOT NULL,`benutzername` varchar(30) NOT NULL,`passwort` varchar(30) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");
      connection.query("INSERT INTO `benutzer`(`id`, `benutzername`, `passwort`) VALUES (1,'test','123');");
    }
  });

  
app.use(express.static("public"));



app.listen(2222, () => {
  console.log("Server started on Port 2222")
});

app.get("/", (req, res)=>{
   //res.send("Hello world");
});


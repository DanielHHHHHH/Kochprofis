const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kochprofis'
  });
  
app.use(express.static("public"));



app.listen(2222);

app.get("/", (req, res)=>{
    res.send("Hello world");
});
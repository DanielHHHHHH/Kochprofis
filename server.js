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
    }
  });

  
app.use(express.static("public"));



app.listen(2222, () => {
  console.log("Server started on Port 2222")
});

app.get("/", (req, res)=>{
   //res.send("Hello world");
});
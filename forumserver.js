const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
app.use(express.static("public"));
app.listen(5555);

app.get("/", (req, res)=>{
    res.send("Hello world");
});

mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kochprofis",
  })
  .then((con) => {
    connection = con;
  });

  app.use(express.static("public"));
  app.use(express.json());

  
app.use(
    session({
      secret: "super secret",
      resave: false,
      saveUninitialized: true,
    })
  );
  

  app.get("/", async (req, res) => {
      console.log(req.query.author);

      if(req.query.author){
      const [rows] = await connection.execute("SELECT * FROM rezepte");
    }
      res.json(rows);
  });
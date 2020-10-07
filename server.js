const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.static("public"));
app.listen(5555);

app.get("/", (req, res)=>{
    res.send("Hello world");
});
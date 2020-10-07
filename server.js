const express = require("express");
const mysql = require("mysql");
const app = express();
app.use(express.static("public"));
app.listen(2222);

app.get("/", (req, res)=>{
    res.send("Hello world");
});
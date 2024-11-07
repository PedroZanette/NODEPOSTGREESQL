//biblioteca que vai gerenciar variáveis ambientes de um projeto
require("dotenv").config(); 

const port = process.env.PORT; //informa ao servidor qual porta deve escutar

const db = require("./db");

const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    res.json({message: "Funcionando"});
})

app.get("/frangoDoG", async (req, res) => {
    const frangoDoG = await db.selectCustomers();
    res.json(frangoDoG);
})
app.listen(port);

console.log("Backend rodando");
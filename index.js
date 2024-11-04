//biblioteca que vai gerenciar variáveis ambientes de um projeto
require("dotenv").config(); 

const port = process.env.PORT; //informa ao servidor qual porta deve escutar

const express = require("express");

const app = express();

app.listen(port);

console.log("Backend rodando");
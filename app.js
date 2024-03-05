const express = require('express')
const mongoDb = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
require("dotenv").config()
const PORT = 3000;

//importando a routes
const routes = require('./src/routes/index.js')

// Middleware para parsear o corpo da requisição como JSON
app.use(bodyParser.json());

app.use(routes)

//CONEXAO com o banco de dados
mongoDb.connect(process.env.MONGO_HOST,).then(result => {
    app.listen(PORT, () => {
        console.log(`Para acessar, clique aqui: http://localhost:${PORT}`);
    })
})
    .catch(
        err => {
            console.log(err);
        }
    )


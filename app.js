const express = require('express')
const PORT = 3000;
const bodyParser = require('body-parser');
var app = express();

//PUXANDO A ROTA
const livros = require('./src/routes/infoLivrosRoutes')

// Middleware para parsear o corpo da requisição como JSON
app.use(bodyParser.json());

//get
app.use('/biblioteca', livros)

//post
app.use('biblioteca', livros)

app.listen(PORT, () => {
    console.log(`Para acessar, clique aqui: http://localhost:${PORT}`);
})
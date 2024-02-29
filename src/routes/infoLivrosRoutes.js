const express = require("express")
const router = express.Router()

//IMPORTANDO O CONTROLLER E SEUS MÉTODOS
var livroController = require('../controller/livroControlller')

router.get("/verlivros", livroController.verlivros)

router.post('/salvarlivros', livroController.salvarlivros);

module.exports = router
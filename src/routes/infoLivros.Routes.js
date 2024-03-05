const { Router } = require('express')

const libraryRoutes = Router()

//chamando os métodos das classes dentro de Controller
const LibraryController = require('../controller/livroControlller')
const libraryController = new LibraryController()

libraryRoutes.post('/salvarLivros', libraryController.salvarLivro)

libraryRoutes.get('/verLivros', libraryController.verLivros)

//exportando
module.exports = libraryRoutes;
const { Router } = require("express")

const libraryRoutes = require('./infoLivros.Routes')

const routes = Router()

//Toda nova rota criada no Routes vai ser lançada aqui

routes.use('/biblioteca', libraryRoutes)

module.exports = routes
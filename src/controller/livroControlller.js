const LibraryModel = require('../models/Schema')

class LibraryController {

    async salvarLivro(req, res) {
        try {
            if (!req.body.title || !req.body.description || !req.body.author || !req.body.launch) {
                res.status(400).json({
                    error: "Por favor preencher todos os campos corretamente!"
                })
            }
            const newLibrary = new LibraryModel(req.body)

            //salvar o livro no banco de dados
            const newBook = await newLibrary.save();
            res.status(201).json("Livro cadastrado com sucesso!")
        } catch (err) {
            res.status(400).json({ erro: err.message });
        }
    }

    async verLivros(req, res) {
        try {
            const books = await LibraryModel.find();
            res.status(200).json({
                books
            })
        } catch (error) {
            res.status(500).json("Erro ao listar os livros")
        }
    }
}

// exportando o controller da classe library
module.exports = LibraryController;

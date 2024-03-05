class LibraryController {

    salvarLivro(req, res) {
        const { title, description, author } = req.body;

        res.status(200).json({
            registered: "Livro cadastrado com Sucesso",
            title: title,
            description: description,
            author: author
        });
    }

    verLivros(req, res) {
        res.send("Livro TALLL")
    }
}

// exportando o controller da classe library
module.exports = LibraryController;

exports.verlivros = (req, res) => {
    res.status(200).json({
        livros: "OK"
    })
}

exports.salvarlivros = (req, res) => {
    // Obter os dados do corpo da requisição
    var { titulo, nome_autor, ano_lancamento, descricao } = req.body;

    // VALIDAÇÃO DE CONTEUDO
    if (!titulo || !nome_autor || !ano_lancamento || !descricao) {
        res.status(400).send("Todos os campos devem ser preenchidos");
    } else {
        // Lógica para salvar os dados no banco de dados ou realizar outras operações
        // Exemplo: salvarLivroNoBancoDeDados(titulo, nome_autor, ano_lancamento, descricao);

        // Responder à requisição com uma mensagem ou status
        res.status(200).send("Livro salvo com sucesso");
    }
}
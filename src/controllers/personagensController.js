const personagensModel = require("../models/personagensModel");

function buscar(req, res) {
    const { personagem, quantidade } = req.body;

    personagensModel.buscar(personagem, quantidade)
        .then(resultados => {
            res.status(200).json(resultados);
        })
        .catch(erro => {
        
            console.erro("Erro ao buscar personagens:", erro);
            res.status(500).json({ erro: "Erro ao buscar personagens" });
        });
}

module.exports = {
    buscar
};


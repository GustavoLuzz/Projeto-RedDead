const personagensModel = require("../models/personagensModel");


function buscar(req, res) {
    const { personagem, quantidade } = req.body;
        personagensModel.buscar(personagem, quantidade)
            .then(
                function (resultadoBuscar) {
                    console.log(`\nResultados encontrados: ${resultadoBuscar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoBuscar)}`); // transforma JSON em String
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    

}


module.exports = {
    buscar
}
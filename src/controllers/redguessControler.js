const redguessModel = require("../models/redguessModel");

function enviar(req, res){
    const personagem = req.body.personagemServer;
    const idUsuario = req.body.idUsuarioServer;

    if(personagem == undefined){
        res.status(400).send("O personagem está undefined")
    }else if (idUsuario == undefined){
        res.status(400).send("Seu id está undefined")
    } else {
        redguessModel.enviar(idUsuario,personagem)
        .then( function(resultado){
            res.json(resultado)
        }) 
        .catch(function (erro){
            console.log(erro)
            console.log(
                "\nHouve um erro ao enviar o personagem! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }


        )
    }
}

module.exports = {
    enviar
}
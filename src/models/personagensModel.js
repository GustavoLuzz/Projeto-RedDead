const database = require("../database/config");
function buscar(personagem, quantidade) {
    console.log(
      "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscar():",
      personagem,
      quantidade
      
    );
 // buscando a quantidade de personagens
        const instrucaoSql = `
            SELECT personagem, count(*) as quantidade FROM personagens GROUP BY personagem;
        `;
    
        // Executar a query no banco de dados e retornar a Promise
        return database.executar(instrucaoSql);
  }
    
    module.exports = {
        buscar
    };
    
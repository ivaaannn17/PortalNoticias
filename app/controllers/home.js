const NoticiasDAO= require('../models/NoticiasDAO');//importação do módulo NoticiasDAO

// cada módulo exporta uma função específica, como incluir, salvar e atualizar noticia
// # Explicando os paramêtros:
// app -> variável que contém a instância do express
// req -> requesição do cliente
// res -> resposta do servidor

module.exports.index=function(app,req,res){ // módulo de redenrização da pág inicial
        var connection=app.config.dbConnection();  // variável contendo a conexão com o BD
        var noticiasModel= new NoticiasDAO(connection);  // gerando um novo model com a conexão com BD
         
        noticiasModel.get5UltimasNoticias(connection,function(error,result){
        	if (error){
        		console.log(error);  // se tem erros, notifica no cmd
        	}
        	res.render('home/home.ejs',{noticias:result}); // renderizando a tela home
        });
}
const NoticiasDAO= require('../models/noticiasDAO');//importação do módulo NoticiasDAO

// cada módulo exporta uma função específica, como incluir, salvar e atualizar noticia
// # Explicando os paramêtros:
// app -> variável que contém a instância do express
// req -> requesição do cliente
// res -> resposta do servidor

module.exports.noticias=function(app,req,res){ // módulo de renderização da pág noticias
        var connection=app.config.dbConnection(); // variável contendo a conexão com o BD
        var noticiasModel= new NoticiasDAO(connection);  // gerando um novo model com a conexão com BD
         
        noticiasModel.getNoticias(connection,function(error,result){ // usando o model de buscar AS noticias, com seus respectivos parametros
        	res.render('noticias/noticias.ejs',{noticias:result}); // renderização da tela noticias
        });
          
}

module.exports.noticia=function(app,req,res){ // módulo de renderização da pág de uma noticia específica
	var connection=app.config.dbConnection();
        var noticiasModel= new NoticiasDAO(connection);  
        // se foi feito a requesição da id da noticia, salva ela
        if (req.query.id_noticia) {
		var id_noticia = req.query; // id_noticia recebe o parâmetro enviado pela views,
		// que contém o id da noticia a ser exibida.
        } else { //senão retorna para a página noticias
        	res.redirect('noticias');
                return;
        }


        noticiasModel.getNoticia(connection, id_noticia, function(error,result){ // usando o model de mostrar UMA noticia, com seus respectivos parametros
        res.render('noticias/noticia.ejs',{noticia:result}); //renderização da tela noticia
 		
 	});

}

module.exports.excluir=function(app,req,res){ // módulo para excluir uma noticia
        var pesquisa=req.body.pesquisa;        
        var connection=app.config.dbConnection();
        var noticiasModel= new NoticiasDAO(connection);  
        if (req.query.id_noticia) {
                var id_noticia = req.query;
        }
        else {
                res.redirect('/noticias');
                return;
        }
        noticiasModel.excluiNoticia(connection, id_noticia, function(error,result){ // usando o model de excluir uma noticia, com seus respectivos parametros
                res.redirect('/noticias');             
        });

}

module.exports.editar=function(app,req,res){  // módulo para editar uma noticia     
        var connection=app.config.dbConnection();
        var noticiasModel= new NoticiasDAO(connection);  
        if (req.query.id_noticia) {
                var id_noticia = req.query;
        }
        else {
                res.redirect('/noticias');
                return;
        }
        noticiasModel.getNoticia(connection, id_noticia, function(error,result){ 
                res.render('admin/form_update_noticia', {validacao:{}, noticia:result});  // renderização da tela form_update_noticia           
        });

}


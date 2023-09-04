const NoticiasDAO=require('../models/NoticiasDAO'); //importação do módulo NoticiasDAO

// cada módulo exporta uma função específica, como incluir, salvar e atualizar noticia
// # Explicando os paramêtros:
// app -> variável que contém a instância do express
// req -> requesição do cliente
// res -> resposta do servidor

module.exports.formulario_inclusao_noticia=function(app, req, res){ // módulo de rederização da pág formulário de inclusão de noticia
	res.render('admin/form_add_noticia.ejs',{validacao:{}, noticia:{}}); // renderizando a tela
}
	
module.exports.noticias_Salvar=function(app, req, res){ // módulo para salvar uma noticia
	var noticia=req.body; // requesitando o corpo na variável noticia

  // as próximas 6 linhas informam requesições para inclusão de noticia   
	req.assert('titulo','Título da notícia é obrigatorio').notEmpty();
  req.assert('resumo','Resumo é obrigatorio').notEmpty();
  req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor','Autor é obrigatorio').notEmpty();
  req.assert('noticia','Noticia é obrigatorio').notEmpty();
  req.assert('data_noticia','Data da noticia é obrigatorio').notEmpty();
          
  var erros=req.validationErrors();
  // se tem erros, renderiza a página com esses erros
    if(erros){
      res.render('admin/form_add_noticia.ejs',{validacao:erros, noticia:noticia});
      return;
    }
  // senão...

	var connection=app.config.dbConnection(); // variável contendo a conexão com o BD
  var noticiasModel= new NoticiasDAO(connection);   // gerando um novo model com a conexão com BD
  noticiasModel.salvarNoticia(noticia, connection, function(error,result){ // usando o model de salvar noticia, com seus respectivos parametros
    if(error){
      console.log(error);
    }
		res.redirect('/noticias'); //redirecionando para a tela com as noticias

 		});

}


module.exports.noticias_atualizar=function(app, req, res){ // módulo para atualizar uma noticia
  var noticia=req.body;
  var id_noticia=req.body.id_noticia;
    
  req.assert('titulo','Título da notícia é obrigatorio').notEmpty();
  req.assert('resumo','Resumo é obrigatorio').notEmpty();
  req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
  req.assert('autor','Autor é obrigatorio').notEmpty();
  req.assert('noticia','Noticia é obrigatorio').notEmpty();
  req.assert('data_noticia','Data da noticia é obrigatorio').notEmpty();
          
  var erros=req.validationErrors();
    if(erros){
      res.render('admin/form_update_noticia.ejs',{validacao:erros, noticia:noticia});
      return;
    }

  var connection=app.config.dbConnection();
  var noticiasModel= new NoticiasDAO(connection);   
  noticiasModel.atualizarNoticia(connection, noticia, noticiasModel.mostraNoticia(connection, id_noticia, function(error,result){ // usando o model de mostrar noticia, com seus respectivos parametros
    if(error){
      console.log(error);
    }
    res.redirect('/noticia?id_noticia='+id_noticia);//redirecionando para a tela com a noticia, usando o id da noticia como parâmetro

    });

}
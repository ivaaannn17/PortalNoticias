module.exports=function(app){  //exportando o modulo para a variavel app
	
app.get('/noticias', function(req,res){ // atráves do método get, informa-se como parâmetro a url e o seu módulo para o controlador da pág
    app.app.controllers.noticias.noticias(app,req,res);
});

app.get('/noticia', function(req,res){
	app.app.controllers.noticias.noticia(app,req,res);
});

app.get('/excluir', function(req,res){
	app.app.controllers.noticias.excluir(app,req,res);
});

app.get('/editar', function(req,res){
	app.app.controllers.noticias.editar(app,req,res);
});

}


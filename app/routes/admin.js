module.exports=function(app){ //exportando o modulo para a variavel app

app.get('/formulario_inclusao_noticia',function(req,res){ // através do método get, informa-se como parâmetro a url e o seu módulo para o controlador da pág
	app.app.controllers.admin.formulario_inclusao_noticia(app,req,res);
});
	
app.post('/noticias/salvar', function(req,res){ // através do método post, informa-se como parâmetro a url e o seu módulo para o controlador da pág
	app.app.controllers.admin.noticias_Salvar(app,req,res);

});
app.post('/atualizar', function(req,res){
	app.app.controllers.admin.noticias_atualizar(app,req,res);

});


}
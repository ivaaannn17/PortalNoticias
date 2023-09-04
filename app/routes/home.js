module.exports=function(app){ //exportando o modulo para a variavel app

app.get('/', function(req,res){  // atráves do método get, informa-se como parâmetro a url e o seu módulo para o controlador da pág
		app.app.controllers.home.index(app,req,res);
});

}
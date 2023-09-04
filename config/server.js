	var express= require('express');  //Requesitando o express 
	var consign= require('consign');  //Requesitando o consign
	var bodyParser= require('body-parser'); //importação do body-parser
	var expressValidator=require('express-validator'); //importação do express-validator

	var app=express(); //Colocando o express em execução
	app.set('view engine','ejs');  //estamos informando para o express que o ejs é o nosso motor de tela
	app.set('views', './app/views'); /// definindo a pasta views como caminho pare o motor de tela
    app.use(express.static('./app/public')); //estamos informando para a aplicação que os arquivos estáticos estão na pasta public. 

	app.use(bodyParser.urlencoded({extended:true})); 
	// aqui parametrízamos como o Body-Parser vai tratar os formulários
	// o parametro extended:true vai permitir que seja implementado através do JSON as url codificadas

	app.use(expressValidator()); // aqui colocamos em execução o express-validator

	consign() 
	.include('app/routes')
	.then('config/dbConnection.js')//incluindo a conexão com o banco no consign
	.then('app/models')
	.then('app/controllers')
	.into(app);
	//o consign reconhece todos os arquivos da pasta routes(faz um scan), pega esses
	//modulos e inclui dentro do servidor - app

	module.exports=app;//o modulo vai retornar a variavel app

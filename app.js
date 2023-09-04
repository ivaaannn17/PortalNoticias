var app = require('./config/server.js');

//#upgrade -> consign - carrega todos os arquivos da pasta routes 

//var rotaHome=require('./app/routes/home.js')(app);

//var rotaNoticias=require('./app/routes/noticias.js')(app);

//var rotaForm_add_noticia=require('./app/routes/form_add_noticia.js')(app);






app.listen(3000, function(){ 
	console.log('Servidor rodando com Express');
});

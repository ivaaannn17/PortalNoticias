var mysql=require('mysql');// fazendo a requesição do mysql

var connMySQL = function(){
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection(
    {
  	 	host: 'localhost',
  		user: 'root',
  		password: 'ifms',
  		database: 'portal_noticias'
    });
}
// até a linha 12, estamos a fazendo a conexão entre a funçao com o BD
module.exports=function(){
  	console.log('O autoload carregou o módulo de conexão com o bd')
  	return connMySQL;
}
// a partir da linha 14, estamos retornando a conexão com uma mensagem de confirmação
function NoticiasDAO(connection){ // Uma classe chamada NoticiasDAO() com a conexão por parâmetro 
	this.getNoticias = function(connection, callback){  // model para buscar TODAS as noticias por ordem de criação
		connection.query('select * from noticias ORDER BY data_criacao desc', callback);	
	}
	this.getNoticia = function(connection, id_noticia, callback){ // model para buscar UMA noticia de acordo com seu ID
		connection.query('select * from noticias where id_noticia= '+id_noticia.id_noticia, callback);
	}
	this.salvarNoticia= function(noticia,connection, callback){ // model para salvar uma NOVA noticia
		connection.query('Insert into noticias set ?',noticia, callback);
	}
	this.get5UltimasNoticias=function(connection,callback){ // model para buscar as ULTIMAS 5 noticias por ordem de criação
		connection.query('select * from noticias order by data_criacao desc limit 5',callback);
	}
	this.excluiNoticia=function(connection, id_noticia, callback){ // model para EXCLUIR UMA noticia de acordo com seu ID
		connection.query('delete  from noticias where id_noticia='+id_noticia.id_noticia, callback);
	}
	this.atualizarNoticia=function(connection, noticia, callback){ // model para atualizar as informações de uma noticia
		connection.query('update noticias set titulo='+noticia.titulo+'noticia='+noticia.noticia+,'noticia='+noticia.noticia+,'resumo='+noticia.resumo+,'autor='+noticia.autor+,'data_noticia='+noticia.data_noticia+,'where id_noticia='+noticia.id_noticia+, callback);
	}
	this.mostraNoticia=function(connection, id_noticia, callback){ //model para mostrar UMA noticia de acordo com seu ID, porém esse caso é usado depois de atualziar uma noticia
		connection.query('select * from noticias where id_noticia='+id_noticia, callback);
	}
}


module.exports= NoticiasDAO;
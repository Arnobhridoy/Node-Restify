var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 3000;
server.listen(port, function(){
	console.log('Todo Api server on %j', server.address());
});
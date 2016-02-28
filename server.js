var restify = require('restify');
var bunyan = require('bunyan');

var options= {
	name: "Todo API"
};

var server = restify.createServer(options);

//server.use(function(req, res, next){
//	console.log('middleware here', req.body);
//	next();
//});

server.use(restify.bodyParser({
	maxBodySize: 10*1024
}));


server.on('after',function(){
	console.log('after', restify.auditLogger({
		log: bunyan.createLogger({
			name: 'audit',
			stream: process.stdout
		})
	}));
});

module.exports = server;

require('./routes');
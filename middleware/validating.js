var Joi = require('joi');

module.exports = function validating(schema){
	return function(req, res, next){
		Joi.validate(req.body, schema, function(err){
			if (err, doc) {
				err.statusCode = 400;
				next(err);
			}
			else{
				req.body = doc;
				next();
			}
		});
	};
	
};
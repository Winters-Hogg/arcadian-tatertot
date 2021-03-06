var http 		= require("http"),
	Router  	= require("routes-router"),
	st 			= require('st'),
	router 		= Router(),
	config 		= (process.env.HEROKU)? 
	{ 
		dbKey:     process.env.DBKEY
	}:
	require('./public/config.js');


var db = require("orchestrate")(config.dbKey);

var collectionName = "capstone";




// router.addRoute("/year/:year", {

// 	GET: function(req, res, opts){

// 		var year = opts.params.year;
			
// 			db.get(collectionName, year).then(function (dbRes) {
  				
//   				console.log(dbRes.body);

//   				res.end(JSON.stringify(dbRes.body));
			
// 			}).fail(function (err) {

// 				res.statusCode = 404;
				
// 				res.end(err);
// 			});
// 	}
// })


router.addRoute("/*", st({

	path: __dirname + "/public",

	index:'/index.html',
}))

var port = (process.env.PORT || 5000);

http.createServer(router).listen(port)

console.log('server listening on port ' + port);

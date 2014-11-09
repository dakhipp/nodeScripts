var http = require('http');

// var options = {
//   hostname: process.argv[2],
//   port: 80,
//   path: '/',
//   method: 'GET'
// };

var req = http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.on('error', function (e) {
		console.log(e.message);
	});
	res.on('data', function (chunk) {
		console.log(chunk);
	});
});

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// req.end();

// http.get(process.argv[2], function(res) {
//  	console.log(res.data + "\n");
//  }).on('error', function(e) {
//   console.log(error);
// });


// ########################################
// 		GIVEN ANSWER****
// ########################################

// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })


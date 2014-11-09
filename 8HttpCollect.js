var http = require('http');

http.get(process.argv[2], function(res) {
	var pageData = "";
	res.setEncoding('utf8');
	res.on('error', function (e) {
		console.log(e.message);
	});
	res.on('data', function (chunk) {
		pageData += chunk;
	});
	res.on('end', function () {
		console.log(pageData.length);
		console.log(pageData);
	});
});


// ########################################
// 		GIVEN ANSWER****
// ########################################

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })


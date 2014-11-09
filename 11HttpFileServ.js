var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    path = process.argv[3];

var server = http.createServer(function(request, response){
    var file = fs.createReadStream(path);
    file.pipe(response);
});

server.listen(port);


// #####################################
// ********LEARNYOUNODE ANSWER**********
// #####################################

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
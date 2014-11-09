var net = require('net');

var date = new Date();
var dateLine = date.getFullYear()+'-0'+(date.getMonth()+1)+'-0'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();

var server = net.createServer(function(socket) {
	console.log('server connected');

  	socket.write(dateLine);

  	socket.end(data);
})

server.listen(process.argv[2]);


// #####################################
// ********LEARNYOUNODE ANSWER**********
// #####################################

// var net = require('net')
    
//     function zeroFill(i) {
//       return (i < 10 ? '0' : '') + i
//     }
    
//     function now () {
//       var d = new Date()
//       return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes())
//     }
    
//     var server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })
    
//     server.listen(Number(process.argv[2]))
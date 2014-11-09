var ioModule = require('/Users/dakhipp/webDev/nodeScripts/6ioModule.js');
var fs = require('fs');
var path = require('path');


var dirName = process.argv[2];
var fileExt = process.argv[3];

var callback = function(err, list) {
	if(err) throw err;
	for(var i = 0; i < list.length; i++){
		console.log(list[i]);
	}
}

ioModule(dirName, fileExt, callback);
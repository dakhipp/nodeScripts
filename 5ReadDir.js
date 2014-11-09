var fs = require('fs');
var dir = process.argv[2];

fs.readdir(dir, function (err, list) {
	if(err) throw err;
	for(var i = 0; i < list.length; i++){
		if(typeof process.argv[3] != "undefined" && list[i].indexOf("." + process.argv[3]) > - 1) {
			console.log(list[i]); 
		} 
	}
});
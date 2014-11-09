var fs = require('fs');

module.exports = function (dirName, fileExt, callback) {
    var files = [];
    fs.readdir(dirName, function (err, list) {
    	if(err) {return callback(err);}
    	for(var i = 0; i < list.length; i++){
			if(typeof fileExt != "undefined" && list[i].indexOf("." + fileExt) > - 1) {
				files.push(list[i]); 
			} 
		}
    	return callback(null, files)
    })
}
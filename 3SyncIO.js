var fs = require('fs');

data = fs.readFileSync(process.argv[2]);
var count = data.toString().split("\n").length - 1;

console.log(count);

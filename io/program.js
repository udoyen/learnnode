// importing the global module fs
//
var fs = require('fs');

var rf = fs.readFileSync(process.argv[2], 'utf-8');



console.log((rf.split('\n').length - 1));



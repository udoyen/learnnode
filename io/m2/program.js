var lister = require('./fileListingMod.js');

var appArgStartIdx = 2;
var dirPath = process.argv[appArgStartIdx];
var extFilter = process.argv[appArgStartIdx + 1];

lister(dirPath,extFilter,function(err,fileList){
if (err) return;
for (var i = 0; i < fileList.length; i++) {
console.log(fileList[i]);
}
});

var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, extFilter, callback){
//fs.exists(dirPath,function(exists){
//if(exists){
var extendedFilter = '.' + extFilter;
fs.readdir(dirPath,function(err,fileList){
if (err) return callback(err);
var extendedList = [];
for (var i = 0; i < fileList.length; i++) {
if(path.extname(fileList[i]) == extendedFilter)
extendedList.push(fileList[i]);
}
callback(null,extendedList);
});
//}
//});
}



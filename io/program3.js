var fs = require('fs');
var path = require('path');

var p = process.argv[2];
var ext = process.argv[3];

var con = '.' + ext;

fs.readdir(p, function(err, list){
    
        if(err) throw err;


        for(var i = 0; i <= list.length; i++){
                
                if(con == path.extname(list[i])){
                        console.log(list[i]);
                
                }

        
        }


});

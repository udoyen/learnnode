 var fs = require('fs');
 var path = require('path');
 

module.exports = function(dir, ext, callback){

     var filterArray = [];
     var con = '.' + ext;

    fs.readdir(dir, function(err, list){
    
        if (err){
        
         return callback(err);
         
        }else{

        for(var i = 0; i < list.length; i++){
                
                if(con === path.extname(list[i])){
                
                        filterArray.push(list[i]);
                
                }

        
            }
        }
        callback(null, filterArray);


});

};



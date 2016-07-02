var fs = require('fs');
var path = require('path');

var p = process.argv[2];
var ext = process.argv[3];

var con = '.' + ext;





module.exports = function (p, ext, callback){

        function bar(callback){
            
            foo(function(err, data){
            
                if(err)
                    return callback(err);
            
            })
        
        
        }
            
        
        fs.readdirSync(p, function callback(err, list){
    
        if(err) throw err;


        for(var i = 0; i <= list.length; i++){
                
                if(con == path.extname(list[i])){
                        console.log(list[i]);
                
                }

        
        }


});
}

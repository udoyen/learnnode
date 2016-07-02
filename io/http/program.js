var http = require('http');

var url = process.argv[2];


http.get(url, function(response){


    response.on('error', function(e){
    
        console.log("Error = " + e.message);
    
    });

    response.setEncoding('utf-8').on('data', function(data){
            
            console.log(data);
            
            
    });
    

    response.on('end', function(end){
    
        //console.log("End");   
    
    
    });
    



});

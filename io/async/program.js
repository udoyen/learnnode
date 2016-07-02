var http = require('http');

var h1 = process.argv[2], h2 = process.argv[3], h3 = process.argv[4];


var dataArray = []; // to keep your data
var initCount = 0; // to keep track of function calls
var doneCount = 0; // to keep track of functions completed

// make sure to display results only if all functions have completed
function showIfDone(){
    if(initCount === doneCount){
        for(var i = 0; i < dataArray.length; i++){
            console.log(dataArray[i]);
        }
    }
}


function fillDataWith(urlAddress){
    var funcCount = ++initCount;
    
    http.get(urlAddress, function(response){
        response.setEncoding('utf-8');
        var completeData = '';
        
        response.on('data', function(data){
            completeData += data;
        });
        
        response.on('end', function(){
            dataArray[funcCount - 1] = completeData; // arrays start at zero
            doneCount++;
            showIfDone();
        });
        
        response.on('error', function(err){
            doneCount++;
            console.error(err);
            showIfDone();
        });
    });
}


fillDataWith(h1);
fillDataWith(h2);
fillDataWith(h3);
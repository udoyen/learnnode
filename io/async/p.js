/**
 * Created by george on 7/3/16.
 */

var http = require('http');

var h1 = process.argv[2], h2 = process.argv[3], h3 = process.argv[4];
var src = [h1, h2, h3];

var dataCollect = [];
var dataCount = 0;
var doneCount = 0;


function presentData() {
    if(doneCount === 3){
        for(var i = 0; i < dataCollect.length; i++){
            console.log(dataCollect[i]);
        }
    }
}


function getData(url){

    http.get(url, function(response){
        response.setEncoding('utf-8');
        var comData = '';

        response.on('data', function(data){
            comData += data;
        });

        response.on('end', function () {
            dataCollect[dataCount] = comData;
            dataCount++;
            doneCount++;
            presentData();

        });

        response.on('error', function (err){
            
            console.error(err);
            presentData();
        })
    });
}

for(var j = 0; j < 3; j++){
    getData(src[j]);
}

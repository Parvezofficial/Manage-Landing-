 const li = document.createElement('li');
 li.innerText('list-5');
 const ul = document.getElementById('list_item');
 ul.appendChild('li');

 var http = require('http');
 var uc = require('upper-case');
 http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": 'text/html'});
    //use our upper-case module t0 upper case a string
    res.write(us.upperCase('Caution!'));
    res.end();
 }).listen(8080);
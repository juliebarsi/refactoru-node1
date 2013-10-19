var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	fs.readFile(__dirname + '/test.txt', function(err, data) {
	if(err){
			response.writeHead(404)
			response.end("FILE NOT FOUND")
		}
		else{
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end(data)
		}
	});
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('Hello Lori this is new stuff.\n');
}).listen(1337, '127.0.0.1');

var http =require("http")

http.createServer(function(request,response){
	console.log('request to 5001')
	response.writeHead(200,{'Content-Type':'text/plain'});

	response.end("Hello World\n");
}).listen(5001);

console.log('server runing at 5001')

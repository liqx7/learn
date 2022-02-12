var http =require("http")

http.createServer(function(request,response){
	console.log('request to 5000')
	response.writeHead(200,{'Content-Type':'text/plain'});

	response.end("Hello World\n");
}).listen(5000);

console.log('server runing at 5000')

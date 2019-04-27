//taking http module from node environment
var http = require('http');

/*http is object, using which we are calling method createServer
we are using callback function which has two arguments - request and response
1. request - when we need some information from the user
2. response - when we need to provide some information to the user
*/
var server = http.createServer(function(req,res)
{
// writeHead method, if successfully sent the status will be 200(OK) and the content type is text/plain
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Welcome to my first nodejs server");
});

//Calling server, using the listen method which calls the server on port 1234
server.listen(1234, function(){
    console.log("Server started");
}
)
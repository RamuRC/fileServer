var http = require("http");
var url = require("url");

var exec = require("child_process").exec;

function start(route, handle) {
  function onRequest(request, response) {
  	var pathname = url.parse(request.url).pathname;
  	
  	route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;


<!-- http://localhost:8888/ -->
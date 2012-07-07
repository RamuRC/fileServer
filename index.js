var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = requestHandlers.readFile;

server.start(router.route, handle);
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = requestHandlers.readFile;
var showDir = requestHandlers.showDir;

server.start(router.route, handle);
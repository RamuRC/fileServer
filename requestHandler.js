var fs = require('fs');
var exec = require("child_process").exec;

function readFile(pathName, response) {
	console.log(pathName);

	fs.readFile("."+pathName,function(err,data) {
		if(!err) {
			console.log(data);
			console.log("Request for " + pathName + " received.");
		    response.writeHead(200, {"Content-Type": "text/plain"});
		    response.write(data);
		    response.end();
		}
	});	
	
	exec("ls -lah", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(stdout);
	    response.end();
	  });
}

function start() {
  console.log("Request handler 'start' was called.");
  var content = "empty";

  exec("ls -l", function (error, stdout, stderr) {
    content = stdout;
  });

  return content;
}

exports.readFile = readFile;
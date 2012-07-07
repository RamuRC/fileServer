var fs = require('fs');

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
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end();
	});

}

exports.readFile = readFile;
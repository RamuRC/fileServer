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
	
	fs.readdir("."+pathName, function(err,files) {
		if(!err) {
			console.log("Request for " + pathName + " received.");
			
			console.log(files);
			
			var content = HTMLFileContentWithDir(pathName, files);
		    response.write(content);
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

function HTMLFileContentWithDir (pathName, files) {
	var title = "<html>";
	var taile = "</html>"
	console.log("pathname" + pathName + "content :")
	if(pathName.length > 1) {
		pathName += "/";
	}
	for (i = 0; i < files.length; ++i) {
		var str = "<a href = \"" + pathName + files[i] + "\">" + files[i] + "</a><br>";
		console.log(str);
		title = title + str;
	}
	return title + taile;
}

exports.readFile = readFile;
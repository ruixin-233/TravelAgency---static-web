const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express"); 
const app = express();
const greeting = require("./greetings.js");


var myServer = http.createServer((req, res) => {
	var myurl = req.url;
	var parseObject = url.parse(myurl);
	var filename = "." + parseObject.path; 
	console.log(myurl);
	if (parseObject.path ==='/') {
		res.writeHead(200, {"context-type" : "text/html" });
		res.write("Please specify what file you want me to serve");
		res.end();
		}
		
		
	else {
	fs.readFile(filename, (err, data) => {
		if (err) {
				res.writeHead(400, {"content-type": "text/html"});
				fs.readFile("404.html", (err, data) => {
					if (err) throw err;
					res.end(data);
				});
		}
		else {
		res.writeHead(200, { "content-type": "text/html" });
		res.write(data);
		res.end();
		}
	});
	}
}); 

myServer.listen(8000, ()=>{ console.log("Server started") });

app.listen(8000, ()=>{ 
	console.log("Server started"); 
});

app.use(express.static("html", { "extensions": ["html", "htm"] }));

app.get("/", (req, res)=>{
	console.log(__dirname);
	res.send("Welcome to our page");
});

app.get("/contact", (req, res)=>{
	res.sendFile("/contact");
});




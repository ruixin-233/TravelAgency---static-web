//index2.js

const express = require("express"); 
const app = express();

app.listen(7000, ()=>{ 
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


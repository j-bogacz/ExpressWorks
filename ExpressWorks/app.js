var express = require("express");
var app = express();
var path = require("path");
var stylus = require("stylus");

app.use(stylus.middleware(process.argv[3] || "public"));

app.use(express.static(process.argv[3] || "public"));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(process.argv[2]);

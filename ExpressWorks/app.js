var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");

app.set("views", process.argv[3] || "templates");
app.set("view engine", "jade");

app.use(bodyparser.urlencoded({ extended: false }));

app.get("/home", function (req, res) {
	res.render("index", { date: new Date().toDateString() });
});

app.get("/form", function (req, res) {
	res.sendFile(path.join(__dirname + "/public/form.html"));
});

app.post("/form", function (req, res) {
	var typed = req.body.str;
	//res.render("form", { typed: typed });
	res.end(typed.split("").reverse().join(""));
});

app.listen(process.argv[2]);

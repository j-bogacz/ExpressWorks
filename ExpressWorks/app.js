var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");

app.set("views", process.argv[3] || "templates");
app.set("view engine", "jade");

app.use(bodyparser.urlencoded({ extended: false }));

app.get("/form", function (req, res) {
	res.sendFile(path.join(__dirname + "/public/form.html"));
});

app.post("/form", function (req, res) {
	var typed = req.body.input;
	var typed_reversed = typed.split("").reverse().join("");
	res.render("form", { typed: typed, typed_reversed: typed_reversed });
});

app.listen(process.argv[2]);

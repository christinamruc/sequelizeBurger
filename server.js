//node dependecies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
	app.use(express.static(process.cwd() + "/public"));

//open server
var port = process.env.PORT || 3306;
app.listen(port);

//parse application url encoded
	app.use(bodyParser.urlencoded({ extended: false}));

//handlebars
var exphbs = require("express-handlebars");
	app.engine("handlebars", exphbs({defaultLayout: "main"}));
	app.set("view enging", "handlebars");

var router = require("./controllers/burgers_controller.js");
	app.use("/", router);
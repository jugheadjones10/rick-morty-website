var express = require("express");
var hbs = require("hbs");

var app = express();

app.set("view engine", hbs);
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/myCSS'));
//Why do I have to do the above? 
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res) => {
    res.render("home.hbs", {});
})



app.listen(5000);

//Potential problems:
//1. CSS is not taken from Bootstrap properly
//set up express here

var express = require("express");
var app = express();

//middleware

app.use("/", function(req, res, next){
  console.log(req.method, req.url);
  next();
});

app.use(express.static(__dirname + "/public"));


//listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log("listening on port " + port);

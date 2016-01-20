var express = require('express');
var app = express();
var PORT = Number( process.env.PORT || 3000 );

function sendFile(name) {
  return function(req, res) {
    res.sendFile(__dirname + "/static/" + name);
  };
}

app.get("/", sendFile("index.html"));
app.get("/bundle.js", sendFile("bundle.js"));
app.get("/app.css", sendFile("app.css"));

app.listen(PORT, console.log.bind(null, 'Server running on port ' + PORT));

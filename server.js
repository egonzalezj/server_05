var express = require('express');
var app = express();
//Hostname info
var hostname = 'webrtctest2.zapto.org';
var port = 80;

app.set('view engine', 'jade');

app.get("/", function(req, res) {
  res.render('index');
});

app.listen(port, hostname, function() {
  console.log('connected to ' + hostname + ':' + port);
});

var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get("/", function(req, res) {
  res.render('index')
});

app.listen(80, 'webrtctest2.zapto.org');

var express = require('express');
var app = express();

var fs = require('fs');

var config = require('./config');

var port = config.port;
var ipfile = config.ipfile;


app.get('/', function (req, res) {
  fs.readFile(ipfile, 'utf8', function (fileerr, data) {
    if (fileerr) {
      console.log('Error reading IP file');
      res.send('Error reading IP file');
    } else {
      var ip = data;

      res.send(ip);
    }
  });
});

app.listen(port, function () {
  console.log('Running and listening on port ', port);
});

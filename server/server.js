var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../public'));

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('/index.html');
});

router = require('./routes')(router);

app.use('/api/v1/', router);

app.listen(port);
console.log('Server started on %s', port);

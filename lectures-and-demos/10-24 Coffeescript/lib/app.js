// Generated by CoffeeScript 1.6.3
(function() {
  var app, express, http, path, users;

  express = require('express');

  http = require('http');

  path = require('path');

  users = require('./users');

  app = express();

  app.set('port', process.env.PORT || 3000);

  app.set('views', __dirname + '/../views');

  app.set('view engine', 'jade');

  app.use(express.favicon());

  app.use(express.logger('dev'));

  app.use(express.bodyParser());

  app.use(express.methodOverride());

  app.use(app.router);

  app.use(express["static"](path.join(__dirname, '/../public')));

  if ('development' === app.get('env')) {
    app.use(express.errorHandler());
  }

  app.get('/', function(req, res) {
    return res.render('index', {
      ENV: 'dev'
    });
  });

  http.createServer(app).listen(app.get('port'), function() {
    return console.log('Express server listening on port ' + app.get('port'));
  });

}).call(this);

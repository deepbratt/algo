var mysql = require('mysql');
var bodyParser = require('body-parser');
require('../config/db.js');
var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){
  app.get('/services', function(req, res){
    res.send('all services will be shown asap.');
  });
};

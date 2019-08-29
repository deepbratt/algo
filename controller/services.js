var mysql = require('mysql');
var bodyParser = require('body-parser');
var db = require('../config/db.js');
var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){
  app.get('/services', function(req, res){
    var PREPARING_BUNDLE_ALLDATA = "SELECT * FROM supplier_service limit 50";
    db.query(PREPARING_BUNDLE_ALLDATA, function (err, result, fields) {
      if (err) throw err;
      res.send(JSON.stringify (result));
    });
  });
};

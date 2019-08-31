var stream = require('stream');
var mysql = require('mysql');
var http = require('http');
var util = require('util');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('../config/db.js');
var urlencodedParser = bodyParser.urlencoded({extended: false});


module.exports = function(app){
  app.get('/services', function(req, res){
    /*var PREPARING_BUNDLE_ALLDATA = "SELECT * FROM supplier_service limit 50";
    db.query(PREPARING_BUNDLE_ALLDATA, function (err, result, fields) {
      if (err) throw err;
      res.send(JSON.stringify (result));
    });*/
    db.query("SELECT * FROM supplier_service limit 50")
      .stream()
      .pipe(stream.Transform({
        objectMode: true,
        transform: function(data,encoding,callback) {
          //res.write(util.inspect(JSON.stringify(data)));
          res.write(util.inspect(JSON.stringify(data)));
          console.log('new chunk received');
          callback()
        }
       })
       .on('finish',function() {console.log('done')})
     )


   });
};

var express = require('express');
var app = express();
var services = require('./controller/services');


//showing services function
//http://3.16.159.114:3000/services using forever npm
services(app);

const PORT = process.env.PORT || 3000
app.listen(PORT);
console.log('You app is live on port:' + PORT);

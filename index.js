var express = require('express');
var app = express();
var services = require('./controller/services');


//showing services function
services(app);

const PORT = process.env.PORT || 3000
app.listen(PORT);
console.log('You app is live on http://localhost:' + PORT);

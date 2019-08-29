var express = require('express');
var app = express();



const PORT = process.env.PORT || 3000

app.listen(PORT);
console.log('You app is live on http://localhost:' + PORT);

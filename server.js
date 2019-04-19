var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));
const port=process.env.PORT || 3000;
app.listen(port, function() {
 console.log("Listening on port %s...", port);
});

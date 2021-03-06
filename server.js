
var express = require('express'),
    app = express(),
    path = require("path");


app.use('/build/', express.static(path.join(__dirname, 'static/build/')));


app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/template/index.html');
});


app.listen(9999, function () {
    console.log('App listening on port 9999!')
});

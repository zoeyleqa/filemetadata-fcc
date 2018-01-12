// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');

var upload = multer({ dest: '/tmp'});


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/upload', upload.single('uploadfile'), function(req,res){
  res.send(req.file);
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');

var upload = multer({ dest: '/tmp'});

var size =null;
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('uploadfile'), function(req,res){
 
  // size = ;
   var ret = { size: req.file.size};
  res.end(JSON.stringify(ret));
});

// app.get('/info', function(req,res){
  
//   res.send(size);
// });



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var QrCode = require('qrcode-reader')
var $ = require('jquery');
var app = require('express')();
var http = require('http').Server(app);
var express = require('express')
var bodyParser = require('body-parser');
var multer  = require('multer');
var fs  = require('fs');
var base64url = require('base64-url');
var QrCode = require('qrcode-reader');

var morgan = require('morgan');
var upload = multer({ dest:'./uploads/' });


app.use(bodyParser());
app.use(express.static(__dirname+"/y" ));
app.get('/', function(req, res){
	res.sendfile('index.html');
});

http.listen(2000, function(){
  console.log('listening on *:8099');
});

app.post('/form', upload.single('photo'), function(req, res){

  var qr = new QrCode();
	var file = __dirname + '/'+'uploads'+'/' + req.file.filename;
  var url = req.file.path;
  var dataUrl = base64url.encode(url);


  var image = new Image(100,200);
      image.src = url;
 fs.rename(req.file.path, file, function(err) {

        if(err){

        res.send("404 Error Resource not found");

        }

        else{
          console.log(file);
        }

 });

 fs.readFile(req.file.path, function (err, data) {
      if (err){
        res.json({Error:"404 Error Not found"});
      } else{

                qr.decode(dataUrl);

                qr.callback = function(result,err) {
                if( result ) {
                 res.json({DecodedData:result});
                }
                if( err ) {
                  res.json({error:"404 Not Found Error"});
                }
                

              }    

   



      }           
});


});



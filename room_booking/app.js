var express = require("express");
var app=express();

var path = require("path");
var bodyParser = require("body-parser");




app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb',extended: false}));


var routes = require('./routes/roombooking');



app.use('/',routes);
app.set('port',9000);

app.listen(app.get('port'),function(re){
  console.log('SERVER STARTED');
  console.log('server hosted at 9000');

});

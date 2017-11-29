var express = require('express');
var app = express();
var mongoose = require('mongoose');
//DB setup
mongoose.connect("mongodb://admin:@Hudsioo522@cluster0-shard-00-00-sl3l8.mongodb.net:27017,cluster0-shard-00-01-sl3l8.mongodb.net:27017,cluster0-shard-00-02-sl3l8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");
app.get('/', function(req, res){
 res.send("Hello World-changed-1");
});
app.listen(3000, function(){
 console.log('Example app listening on port 3000!');
});

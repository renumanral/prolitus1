var express=require("express");
var mysql=require("mysql");
var ejs=require("ejs");
var bodyParser=require("body-parser");
var db=require('./db');
  var app=express();
  app.set('view engine','ejs');
  app.use(bodyParser.urlencoded({extented:true}));
  app.use(bodyParser.json());
exports.register = function(req, res) {

    console.log("renu",req.body);
    var users={
        
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "phone":req.body.phone,
        "hobbies":req.body.hobbies,
        "gender":req.body.gender,
        "marital_status":req.body.status,
        "country":req.body.country,
        "city":req.body.city,
        "state":req.body.state,
        "address":req.body.address,
        "address1":req.body.address1,
        "pin":req.body.pin,
        "status":1,
        // "fileupload":req.body.file
        // "created_at": Date.now(),

}
console.log("22222222222222",users);
var sql="INSERT INTO details set ? ";
console.log("$$$$$",sql);
db.query(sql,[users],function(error,results){

  if(error){
    console.log("444444",error);
  }
  else{
    res.render('login')
  }
}

)};

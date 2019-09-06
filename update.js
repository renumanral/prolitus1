var express=require("express");
var ejs=require("ejs");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var db=require('./db');
  var app=express();
  app.set('view engine','ejs');
  app.use(bodyParser.urlencoded({extented:true}));
  app.use(bodyParser.json());
  exports.update = function(req, res) {
    console.log("RREENNUU",req.body)
    var users={
        
        "name":req.body.name,
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
        
    
    }
     var email= req.body.email;
    

    var sql="UPDATE  details  SET ? WHERE email= ? ";
    console.log("users",users,sql)
    db.query(mysql.format(sql),[users,email], function (error, result) {
        
        if (error) {
        console.log("sorry",error);
        res.send("not updated");
    
    } else {
        res.redirect('/myprofile');
        
    }

    

    }); 
}
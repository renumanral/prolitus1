var express=require("express");
var session=require("express-session");
var ejs=require("ejs");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var db=require('./db');
var log=require('./log')
  var app=express();
  app.set('view engine','ejs');
  app.use(bodyParser.urlencoded({extented:true}));
  app.use(bodyParser.json());
  app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
exports.profile = function(req, res) {
    
    // var email=req.session.email;
    
    db.query(mysql.format('SELECT * FROM details WHERE email = ? '),[email], function (error, results, fields) {
    
          if(error){
        console.log("77777",err);
          }
          else{
            console.log("898989",results);
                    }




    });
};

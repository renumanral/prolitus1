var express=require("express");
var session=require("express-session");
var ejs=require("ejs");
var mysql=require("mysql");
var bodyParser=require("body-parser");
var db=require('./db');
  var app=express();
  app.set('view engine','ejs');
  app.use(bodyParser.urlencoded({extented:true}));
  app.use(bodyParser.json());
  app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
  exports.login = function(req, res) {
    console.log("3333333333333333333333",req.body)
    
    
  var email = req.body.email;
  var password= req.body.password;
  if(email && password){
  
  db.query(mysql.format('SELECT * FROM details WHERE email = ? AND password=? '),[email,password], function (error, results, fields) {
  if (results.length>0) {
    req.session.loggedin = true;
    req.session.email = email;
    res.redirect('/myprofile');
}
  

else {

    res.write("try again");
    res.end();
   

    
    

}

  });
}
  }

  






  

    
  
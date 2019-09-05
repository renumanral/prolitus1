var ejs=require('ejs');
var db=require('./db');
var admin=require('./admin');
var reggister=require('./reggister');
var login = require('./log');
var myprofile=require('./myprofile');
var update=require('./update');
var mysql=require("mysql");
var path=require("path");
// var request = require('ajax-request');

// var call=require("call");
var multer  = require('multer');
var upload = multer();


var bodyParser = require('body-parser');

var express=require("express");
var session=require("express-session");
var app=express();
app.use(express.static('uploads'));

// app.use(express.static('./uploads'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({secret: 'xyz',saveUninitialized: true,resave: true}));

// app.use(multer({dest:'./uploads/'}).single('file'));

app.get('/',function(req,res){

    res.render('official');
});

app.get('/login',function(req,res){
 
         //    console.log("78787",results);
         res.render('login');

     
});





app.get('/myprofile',function(req,res){
    
    // if (req.session.loggedin) {
	// 	res.send('Welcome back, ' + req.session.email + '!');
	// } else {
	// 	res.send('Please login to view this page!');
	// }
    // res.end();
    var email = req.session.email;
    console.log("4535365365",email)
    
   // myprofile.profile(req, res);
   var sql="SELECT * FROM details WHERE email=?" ;

   db.query(sql,[email],function(error,results){
       if(error){
           console.log("2020202",error);

       }
       else{
        //    console.log("78787",results);
           res.render('myprofile',{
            results: results[0],
        });
       }
   });
    
    //  res.render('myprofile');
     
    });


    app.get('/update',function(req,res){
        var email = req.session.email;
    console.log("4535365365",email)
    
   // myprofile.profile(req, res);
   var sql="SELECT * FROM details WHERE email=?" ;

   db.query(sql,[email],function(error,results){
       if(error){
           console.log("2020202",error);

       }
       else{
         //  console.log("78787",results);
           
           res.render('update',{
            results:results[0],
        });
       }

        
    });
});


app.get('/admin',function(req,res){
    
  res.render('admin');


});






app.post('/registration',function(req,res){
    console.log("inside post")
  reggister.register(req,res);
});


app.post('/login',function(req, res) {

    login.login(req, res);
      });

      app.post('/update',function(req,res){
          update.update(req,res);

      });
  app.post('/admin',function(req,res){
       admin.admin(req,res);
      
  });

  app.post('/blocked',function(req,res){

     var x=req.body.hidden;
     var y=req.body.hidden1; //block status =0 ,unbloc = 1
      console.log("$%$%$%$%",x);
      console.log("<><><><><>><><<",y);

   var sqlss = mysql.format("UPDATE details SET status = ? WHERE id = ?",[y,x]);
    console.log("4444444444444",sqlss)
        db.query(sqlss,function(error, results){
            if (error){
               console.error('Err3or',error);
            }
           else{
               res.send("done");
           }
          });
          



  });

  

app.listen(5010);



